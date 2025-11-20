"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import { useRef } from "react";

const pairs = [
  {
    images: ["/homepage/stool_exploded.png", "/homepage/stool_side.png"],
    caption: "Stool, 2025",
  },
  {
    images: ["/homepage/chair_exploded.png", "/homepage/chair_side.png"],
    caption: "Chair, 2025",
  },
  {
    images: ["/homepage/stool_table.png"],
    caption: "Concept dining, 2025",
  },
  {
    images: ["/homepage/pot_side.png", "/homepage/pot_pour.png"],
    caption: "Pot, 2025",
  },
  {
    images: ["/homepage/pot_exploded.png", "/homepage/pot_top.png"],
    caption: "Pot, 2025",
  },
  {
    images: ["/homepage/maann_payu1.jpg", "/homepage/maann_payu3.jpg"],
    caption: "Fold, 2025",
  },
  {
    images: ["/homepage/maann_payu2.jpg", "/homepage/maann_payu4.png"],
    caption: "Fold, 2025",
  },
  {
    images: ["/homepage/3fold.jpg", "/homepage/1fold.jpg"],
    caption: "Fold, 2025",
  },
  {
    images: ["/homepage/beech_skin1.jpg", "/homepage/beech_skin2.jpg"],
    caption: "Beech, 2024",
  },
  {
    images: ["/homepage/beech_angle.jpg", "/homepage/beech_face.jpg"],
    caption: "Beech, 2024",
  },
];

// Flatten pairs into individual items for mobile navigation
const allItems = pairs.flatMap((pair) =>
  pair.images.map((image, idx) => ({
    src: image,
    caption: pair.caption,
    isPair: pair.images.length > 1,
    pairIndex: idx,
    totalInPair: pair.images.length,
  }))
);

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!mainRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const halfHeight = rect.height / 2;

    const currentScroll = mainRef.current.scrollTop;
    const viewportHeight = mainRef.current.clientHeight;
    const currentIndex = Math.round(currentScroll / viewportHeight);

    if (clickY < halfHeight) {
      // Top half - go to previous
      const prevIndex = Math.max(0, currentIndex - 1);
      mainRef.current.scrollTo({
        top: prevIndex * viewportHeight,
        behavior: "smooth",
      });
    } else {
      // Bottom half - go to next
      const maxIndex = window.innerWidth < 768 ? allItems.length - 1 : pairs.length - 1;
      const nextIndex = Math.min(maxIndex, currentIndex + 1);
      mainRef.current.scrollTo({
        top: nextIndex * viewportHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        <NavBar isSticky={true} />
      </div>
      <main
        ref={mainRef}
        onClick={handleClick}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar bg-white scroll-smooth cursor-pointer"
      >
        {/* Desktop view - pairs */}
        <div className="hidden md:block">
          {pairs.map((pair, index) => (
            <section
              key={index}
              className="h-screen w-full snap-center flex flex-col items-center justify-center p-8"
            >
              <div className="flex flex-row items-start justify-center gap-4 w-full relative">
                {pair.images.map((imageSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="flex flex-col items-center justify-center max-w-full"
                  >
                    <div className="relative w-full max-h-[80vh]">
                      <Image
                        src={imageSrc}
                        alt={`${pair.caption} ${imgIndex + 1}`}
                        width={800}
                        height={800}
                        className={
                          pair.images.length === 1
                            ? "min-w-[600px] max-w-[1200px] w-[60vw] h-auto"
                            : "min-w-[300px] max-w-[600px] w-[30vw] h-auto"
                        }
                        priority={index < 3}
                        quality={75}
                        sizes="50vw"
                      />
                    </div>
                    {imgIndex === pair.images.length - 1 && (
                      <p className="mt-2 text-xs uppercase tracking-widest text-neutral-500 self-end">
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
        <div className="md:hidden">
          {allItems.map((item, index) => (
            <section
              key={index}
              className="h-screen w-full snap-center flex flex-col items-center justify-center p-4"
            >
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={`${item.caption} ${item.pairIndex + 1}`}
                    width={800}
                    height={800}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
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
