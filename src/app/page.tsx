"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useRef, useState, useEffect, useMemo } from "react";
import ContentsPage from "@/components/ContentsPage";
import MobileJumpMenu from "@/components/MobileJumpMenu";

const pairs = [
  {
    images: ["/homepage/stool_exploded.png", "/homepage/stool_side.png"],
    caption: "2025",
  },
  {
    images: ["/homepage/chair_exploded.png", "/homepage/chair_side.png"],
    caption: "2025",
  },
  {
    images: ["/homepage/stool_table.png"],
    caption: "2025",
  },
  {
    images: ["/homepage/pot_side.png", "/homepage/pot_pour.png"],
    caption: "2025",
  },
  {
    images: ["/homepage/pot_exploded.png", "/homepage/pot_top.png"],
    caption: "2025",
  },
  {
    images: ["/homepage/maann_payu1.jpg", "/homepage/maann_payu3.jpg"],
    caption: "2025",
  },
  {
    images: ["/homepage/maann_payu2.jpg", "/homepage/maann_payu4.png"],
    caption: "2025",
  },
  {
    images: ["/homepage/3fold.jpg", "/homepage/1fold.jpg"],
    caption: "2025",
  },
  {
    images: ["/homepage/beech_skin1.jpg", "/homepage/beech_skin2.jpg"],
    caption: "2024",
  },
  {
    images: ["/homepage/beech_angle.jpg", "/homepage/beech_face.jpg"],
    caption: "2024",
  },
];

// Flatten pairs into individual items for mobile navigation
const allItems = pairs.flatMap((pair) =>
  pair.images.map((image) => ({
    src: image,
    caption: pair.caption,
  }))
);

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const [activeYear, setActiveYear] = useState<string>("");
  const [imageBottom, setImageBottom] = useState<number>(0);
  const [imageTop, setImageTop] = useState<number>(0);
  const [mobileImageBottom, setMobileImageBottom] = useState<number>(0);
  const [mobileImageTop, setMobileImageTop] = useState<number>(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Extract unique years for the menu
  const years = useMemo(() => {
    const uniqueYears = new Set<string>();
    pairs.forEach((pair) => {
      uniqueYears.add(pair.caption);
    });
    return Array.from(uniqueYears).sort((a, b) => b.localeCompare(a));
  }, []);

  const scrollToYear = (year: string, items: { caption: string }[]) => {
    if (!mainRef.current) return;

    const index = items.findIndex((item) => item.caption === year);

    if (index !== -1) {
      const viewportHeight = mainRef.current.clientHeight;
      mainRef.current.scrollTo({
        top: index * viewportHeight,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!mainRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const halfHeight = rect.height / 2;

    const currentScroll = mainRef.current.scrollTop;
    const viewportHeight = mainRef.current.clientHeight;
    const currentIndex = Math.round(currentScroll / viewportHeight);

    const isMobile = window.innerWidth < 768;
    const totalItems = isMobile ? allItems.length : pairs.length;

    if (clickY < halfHeight) {
      const prevIndex = Math.max(0, currentIndex - 1);
      mainRef.current.scrollTo({
        top: prevIndex * viewportHeight,
        behavior: "smooth",
      });
    } else {
      const maxIndex = totalItems - 1;
      const nextIndex = Math.min(maxIndex, currentIndex + 1);
      mainRef.current.scrollTo({
        top: nextIndex * viewportHeight,
        behavior: "smooth",
      });
    }
  };

  // Track active year on scroll
  useEffect(() => {
    let imageBottomTimer: ReturnType<typeof setTimeout>;

    const measureImageBounds = () => {
      if (!mainRef.current) return;
      const currentScroll = mainRef.current.scrollTop;
      const viewportHeight = mainRef.current.clientHeight;
      const currentIndex = Math.round(currentScroll / viewportHeight);
      const isMobile = window.innerWidth < 768;

      const selector = isMobile ? "[data-mobile]" : "[data-desktop]";
      const container = mainRef.current.querySelector(selector);
      const sections = container
        ? container.querySelectorAll("section")
        : [];
      const currentSection = sections[currentIndex];
      if (currentSection) {
        const images = currentSection.querySelectorAll("img");
        let maxBottom = 0;
        let minTop = Infinity;
        images.forEach((img) => {
          const rect = img.getBoundingClientRect();
          maxBottom = Math.max(maxBottom, rect.bottom);
          minTop = Math.min(minTop, rect.top);
        });
        if (isMobile) {
          setMobileImageBottom(maxBottom);
          setMobileImageTop(minTop === Infinity ? 0 : minTop);
        } else {
          setImageBottom(maxBottom);
          setImageTop(minTop === Infinity ? 0 : minTop);
        }
      }
    };

    const handleScroll = () => {
      if (!mainRef.current) return;

      const currentScroll = mainRef.current.scrollTop;
      const viewportHeight = mainRef.current.clientHeight;
      const currentIndex = Math.round(currentScroll / viewportHeight);
      const isMobile = window.innerWidth < 768;

      const currentItem = isMobile
        ? allItems[currentIndex]
        : pairs[currentIndex];

      if (currentItem) {
        setActiveYear(currentItem.caption);
      }

      // Debounce image bounds measurement to only fire once scroll settles
      clearTimeout(imageBottomTimer);
      imageBottomTimer = setTimeout(measureImageBounds, 100);
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll);
      handleScroll();
      measureImageBounds();
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(imageBottomTimer);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        <NavBar onDrawerChange={setDrawerOpen} />
      </div>

      {/* Desktop date bar */}
      <ContentsPage
        years={years}
        onYearSelect={(year) => scrollToYear(year, pairs)}
        activeYear={activeYear}
        imageBottom={imageBottom}
        imageTop={imageTop}
      />

      {/* Mobile date bar - hidden when drawer is open */}
      {!drawerOpen && (
        <MobileJumpMenu
          years={years}
          activeYear={activeYear}
          onYearSelect={(year) => scrollToYear(year, allItems)}
          imageTop={mobileImageTop}
          imageBottom={mobileImageBottom}
        />
      )}

      <main
        ref={mainRef}
        onClick={handleClick}
        className="h-dvh w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-white scroll-smooth cursor-pointer"
      >
        {/* Desktop view - pairs */}
        <div data-desktop className="hidden md:block landscape:block">
          {pairs.map((pair, index) => (
            <section
              key={index}
              className="h-dvh w-full snap-center flex flex-col items-center justify-center p-8"
            >
              <div className="flex flex-row items-start justify-center gap-4 w-full relative">
                {pair.images.map((imageSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="flex flex-col items-center justify-center max-w-full"
                  >
                    <div className="relative w-full max-h-[80dvh]">
                      <Image
                        src={imageSrc}
                        alt={`${pair.caption} ${imgIndex + 1}`}
                        width={800}
                        height={800}
                        className={
                          pair.images.length === 1
                            ? "max-h-[80dvh] w-auto object-contain md:min-w-[600px] md:max-w-[1200px] md:w-[60vw] md:h-auto landscape:min-w-0 landscape:w-auto landscape:max-w-full landscape:max-h-[60dvh]"
                            : "max-h-[80dvh] w-auto object-contain md:min-w-[300px] md:max-w-[600px] md:w-[30vw] md:h-auto landscape:min-w-0 landscape:w-auto landscape:max-w-full landscape:max-h-[60dvh]"
                        }
                        priority={index < 3}
                        quality={75}
                        sizes="50vw"
                      />
                    </div>
                    {imgIndex === pair.images.length - 1 && (
                      <p className="mt-2 uppercase self-end landscape:hidden">
                        {pair.caption}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Mobile view - individual images */}
        <div data-mobile className="md:hidden landscape:hidden">
          {allItems.map((item, index) => (
            <section
              key={index}
              className="h-dvh w-full snap-center flex flex-col items-center justify-center p-4"
            >
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={`${item.caption}`}
                    width={800}
                    height={800}
                    className="max-w-full max-h-[85dvh] w-auto h-auto object-contain"
                    priority={index < 3}
                    quality={75}
                    sizes="100vw"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
