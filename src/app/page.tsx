"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import YearBar from "@/components/YearBar";
import ViewfinderFrame from "@/components/ViewfinderFrame";
import {
  DESKTOP_BAR_HEIGHT,
  MOBILE_BAR_HEIGHT,
  MOBILE_SIDE_PADDING,
  DESKTOP_SIDE_INSET,
} from "@/lib/layout";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const barHeight = isMobile ? MOBILE_BAR_HEIGHT : DESKTOP_BAR_HEIGHT;

  const years = useMemo(() => {
    const uniqueYears = new Set<string>();
    pairs.forEach((pair) => uniqueYears.add(pair.caption));
    return Array.from(uniqueYears).sort((a, b) => b.localeCompare(a));
  }, []);

  const scrollToYear = useCallback(
    (year: string, items: { caption: string }[]) => {
      if (!mainRef.current) return;
      const index = items.findIndex((item) => item.caption === year);
      if (index !== -1) {
        const viewportHeight = mainRef.current.clientHeight;
        mainRef.current.scrollTo({
          top: index * viewportHeight,
          behavior: "smooth",
        });
      }
    },
    []
  );

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!mainRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const halfHeight = rect.height / 2;

    const currentScroll = mainRef.current.scrollTop;
    const viewportHeight = mainRef.current.clientHeight;
    const currentIndex = Math.round(currentScroll / viewportHeight);
    const totalItems = isMobile ? allItems.length : pairs.length;

    if (clickY < halfHeight) {
      const prevIndex = Math.max(0, currentIndex - 1);
      mainRef.current.scrollTo({
        top: prevIndex * viewportHeight,
        behavior: "smooth",
      });
    } else {
      const nextIndex = Math.min(totalItems - 1, currentIndex + 1);
      mainRef.current.scrollTo({
        top: nextIndex * viewportHeight,
        behavior: "smooth",
      });
    }
  };

  // Track active year on scroll
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!mainRef.current) return;

        const currentScroll = mainRef.current.scrollTop;
        const viewportHeight = mainRef.current.clientHeight;
        const currentIndex = Math.round(currentScroll / viewportHeight);

        const currentItem = isMobile
          ? allItems[currentIndex]
          : pairs[currentIndex];

        if (currentItem) {
          setActiveYear(currentItem.caption);
        }
      });
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("scroll", handleScroll);
      }
      cancelAnimationFrame(rafId);
    };
  }, [isMobile]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        <NavBar onDrawerChange={setDrawerOpen} />
      </div>

      {/* Year bar — hidden when mobile drawer is open */}
      {!(isMobile && drawerOpen) && (
        <YearBar
          years={years}
          activeYear={activeYear}
          onYearSelect={(year) =>
            scrollToYear(year, isMobile ? allItems : pairs)
          }
          barHeight={barHeight}
        />
      )}

      <ViewfinderFrame isMobile={isMobile} />

      <main
        ref={mainRef}
        onClick={handleClick}
        className="h-dvh w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-white scroll-smooth cursor-pointer"
      >
        {isMobile ? (
          allItems.map((item, index) => (
            <section
              key={index}
              className="h-dvh w-full snap-center flex flex-col items-center justify-center"
              style={{
                padding: `${barHeight} ${MOBILE_SIDE_PADDING}px`,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-contain"
                  priority={index < 2}
                  quality={75}
                  sizes="100vw"
                />
              </div>
            </section>
          ))
        ) : (
          pairs.map((pair, index) => (
            <section
              key={index}
              className="h-dvh w-full snap-center flex flex-col items-center justify-center"
              style={{
                padding: `${barHeight} calc(${DESKTOP_SIDE_INSET} + 32px)`,
              }}
            >
              <div className="flex flex-row items-center justify-center gap-4">
                {pair.images.map((imageSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="flex flex-col items-center"
                  >
                    <Image
                      src={imageSrc}
                      alt={`${pair.caption} ${imgIndex + 1}`}
                      width={800}
                      height={800}
                      className="w-auto object-contain"
                      style={{
                        maxHeight: `calc(100dvh - ${barHeight} - ${barHeight} - 24px)`,
                        maxWidth:
                          pair.images.length === 1
                            ? `calc(100vw - (${DESKTOP_SIDE_INSET}) * 2 - 64px)`
                            : `calc((100vw - (${DESKTOP_SIDE_INSET}) * 2 - 80px) / 2)`,
                      }}
                      priority={index < 2}
                      quality={75}
                      sizes="50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))
        )}
      </main>
    </>
  );
}
