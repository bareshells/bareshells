"use client";

import NavBar from "@/components/NavBar";
import { images } from "@/data/images";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

export default function HomePage() {
  // Create refs for each section
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    sectionRefs.current = Array(images.length).fill(null);
  }, []);

  // Handle click for navigation
  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, sectionIndex: number) => {
      const clickY = e.nativeEvent.clientY;
      const windowHeight = window.innerHeight;
      const isTopHalf = clickY < windowHeight / 2;

      let targetSection;

      if (isTopHalf && sectionIndex > 0) {
        // Go to previous section when clicking top half
        targetSection = sectionRefs.current[sectionIndex - 1];
      } else if (!isTopHalf && sectionIndex < sectionRefs.current.length - 1) {
        // Go to next section when clicking bottom half
        targetSection = sectionRefs.current[sectionIndex + 1];
      }

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  // Group images into pairs for desktop layout
  const imagePairs = [];
  for (let i = 0; i < images.length; i += 2) {
    imagePairs.push(images.slice(i, i + 2));
  }

  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden flex flex-col">
      {/* Mobile sticky navbar - always visible on small screens */}
      <div className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-sm md:hidden pt-safe">
        <NavBar isSticky={true} />
      </div>

      {/* Desktop sticky navbar that appears when scrolled */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm transition-all duration-300 hidden md:block">
        <NavBar isSticky={true} />
      </div>

      <div className="w-full flex-grow flex flex-col">
        {/* Mobile Layout - Single column */}
        <div className="md:hidden h-[94dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth mt-10 flex-grow [scroll-behavior:smooth] [overscroll-behavior:contain]">
          {images.map((image, index) => (
            <section
              key={image.src}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              onClick={(e) => handleSectionClick(e, index)}
              className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
            >
              <div className="w-full max-w-lg flex items-center justify-center relative h-[80vh]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  quality={85}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </section>
          ))}
        </div>

        {/* Desktop Layout - Two images per section */}
        <div className="hidden md:block h-[94dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth flex-grow [scroll-behavior:smooth] [overscroll-behavior:contain]">
          {imagePairs.map((pair, pairIndex) => (
            <section
              key={pair[0].src}
              ref={(el) => {
                sectionRefs.current[pairIndex] = el;
              }}
              onClick={(e) => handleSectionClick(e, pairIndex)}
              className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
            >
              <div className="flex flex-row min-w-[768px] md:max-w-2xl h-[80vh]">
                {pair.map((image, imageIndex) => (
                  <div key={image.src} className="relative w-1/2 h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      quality={85}
                      priority={pairIndex === 0 && imageIndex === 0}
                      loading={
                        pairIndex === 0 && imageIndex === 0 ? "eager" : "lazy"
                      }
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
