"use client";

import NavBar from "@/components/NavBar";
import { images } from "@/data/images";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

// Pre-compute image pairs outside the component
const imagePairs = images.reduce((pairs, image, index) => {
  if (index % 2 === 0) {
    pairs.push([image]);
  } else {
    pairs[pairs.length - 1].push(image);
  }
  return pairs;
}, [] as (typeof images)[]);

export default function CollectionsPage() {
  // Initialize refs array with the correct length based on view type
  const mobileRefs = useRef<(HTMLElement | null)[]>([]);
  const desktopRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    mobileRefs.current = new Array(images.length).fill(null);
    desktopRefs.current = new Array(imagePairs.length).fill(null);
  }, []);

  const handleMobileClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, index: number) => {
      const clickY = e.nativeEvent.clientY;
      const windowHeight = window.innerHeight;
      const isTopHalf = clickY < windowHeight / 2;

      let targetSection;
      if (isTopHalf && index > 0) {
        targetSection = mobileRefs.current[index - 1];
      } else if (!isTopHalf && index < mobileRefs.current.length - 1) {
        targetSection = mobileRefs.current[index + 1];
      }

      targetSection?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  const handleDesktopClick = useCallback(
    (e: React.MouseEvent<HTMLElement>, index: number) => {
      const clickY = e.nativeEvent.clientY;
      const windowHeight = window.innerHeight;
      const isTopHalf = clickY < windowHeight / 2;

      let targetSection;
      if (isTopHalf && index > 0) {
        targetSection = desktopRefs.current[index - 1];
      } else if (!isTopHalf && index < desktopRefs.current.length - 1) {
        targetSection = desktopRefs.current[index + 1];
      }

      targetSection?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  const setMobileRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      if (mobileRefs.current) {
        mobileRefs.current[index] = el;
      }
    },
    []
  );

  const setDesktopRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      if (desktopRefs.current) {
        desktopRefs.current[index] = el;
      }
    },
    []
  );

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
              ref={setMobileRef(index)}
              onClick={(e) => handleMobileClick(e, index)}
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
              ref={setDesktopRef(pairIndex)}
              onClick={(e) => handleDesktopClick(e, pairIndex)}
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
