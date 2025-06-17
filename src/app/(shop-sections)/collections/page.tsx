"use client";

import Image from "next/image";
import { useRef } from "react";

export default function FurniturePage() {
  // Desktop section refs
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  // Mobile image section refs
  const mobileSection1Ref = useRef<HTMLElement>(null);
  const mobileSection2Ref = useRef<HTMLElement>(null);
  const mobileSection3Ref = useRef<HTMLElement>(null);
  const mobileSection4Ref = useRef<HTMLElement>(null);
  const mobileSection5Ref = useRef<HTMLElement>(null);
  const mobileSection6Ref = useRef<HTMLElement>(null);
  const mobileSection7Ref = useRef<HTMLElement>(null);
  const mobileSection8Ref = useRef<HTMLElement>(null);

  const desktopSections = [section1Ref, section2Ref, section3Ref, section4Ref];
  const mobileSections = [
    mobileSection1Ref,
    mobileSection2Ref,
    mobileSection3Ref,
    mobileSection4Ref,
    mobileSection5Ref,
    mobileSection6Ref,
    mobileSection7Ref,
    mobileSection8Ref,
  ];

  // Handle click for desktop
  const handleDesktopSectionClick = (
    e: React.MouseEvent<HTMLElement>,
    sectionIndex: number
  ) => {
    const clickY = e.nativeEvent.clientY;
    const windowHeight = window.innerHeight;
    const isTopHalf = clickY < windowHeight / 2;

    let targetSection;

    if (isTopHalf && sectionIndex > 0) {
      // Go to previous section when clicking top half
      targetSection = desktopSections[sectionIndex - 1].current;
    } else if (!isTopHalf && sectionIndex < desktopSections.length - 1) {
      // Go to next section when clicking bottom half
      targetSection = desktopSections[sectionIndex + 1].current;
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle click for mobile
  const handleMobileSectionClick = (
    e: React.MouseEvent<HTMLElement>,
    sectionIndex: number
  ) => {
    const clickY = e.nativeEvent.clientY;
    const windowHeight = window.innerHeight;
    const isTopHalf = clickY < windowHeight / 2;

    let targetSection;

    if (isTopHalf && sectionIndex > 0) {
      // Go to previous section when clicking top half
      targetSection = mobileSections[sectionIndex - 1].current;
    } else if (!isTopHalf && sectionIndex < mobileSections.length - 1) {
      // Go to next section when clicking bottom half
      targetSection = mobileSections[sectionIndex + 1].current;
    }

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex-grow flex flex-col">
      {/* Mobile Layout - Each image is its own snap point */}
      <div className="md:hidden h-[94dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth mt-10 flex-grow [scroll-behavior:smooth] [overscroll-behavior:contain]">
        {/* Image 1 */}
        <section
          ref={mobileSection1Ref}
          onClick={(e) => handleMobileSectionClick(e, 0)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="w-full flex items-center justify-center relative h-[80vh]">
            <Image
              src="/IMG_6692.jpg"
              alt="exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-contain"
              quality={85}
            />
          </div>
        </section>

        {/* Image 2 */}
        <section
          ref={mobileSection2Ref}
          onClick={(e) => handleMobileSectionClick(e, 1)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="w-full flex items-center justify-center relative h-[80vh]">
            <Image
              src="/IMG_6707.jpg"
              alt="exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              quality={85}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image 3 */}
        <section
          ref={mobileSection3Ref}
          onClick={(e) => handleMobileSectionClick(e, 2)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="w-full flex items-center justify-center relative h-[80vh]">
            <Image
              src="/IMG_6693.jpg"
              alt="exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              quality={85}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image 4 */}
        <section
          ref={mobileSection4Ref}
          onClick={(e) => handleMobileSectionClick(e, 3)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="w-full flex items-center justify-center relative h-[80vh]">
            <Image
              src="/IMG_6696.jpg"
              alt="exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              quality={85}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image 5 */}
        <section
          ref={mobileSection5Ref}
          onClick={(e) => handleMobileSectionClick(e, 4)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="w-full flex items-center justify-center relative h-[80vh]">
            <Image
              src="/S03-0069.jpg"
              alt="exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              quality={85}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image 6 */}
        <section
          ref={mobileSection6Ref}
          onClick={(e) => handleMobileSectionClick(e, 5)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="w-full flex items-center justify-center relative h-[80vh]">
            <Image
              src="/S03-0066.jpg"
              alt="exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              quality={85}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image 7 */}
        <section
          ref={mobileSection7Ref}
          onClick={(e) => handleMobileSectionClick(e, 6)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="w-full flex items-center justify-center relative h-[80vh]">
            <Image
              src="/S01-0039.jpg"
              alt="exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              quality={85}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image 8 */}
        <section
          ref={mobileSection8Ref}
          onClick={(e) => handleMobileSectionClick(e, 7)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="w-full flex items-center justify-center relative h-[80vh]">
            <Image
              src="/S01-0045.jpg"
              alt="exhibition"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              quality={85}
              loading="lazy"
            />
          </div>
        </section>
      </div>

      {/* Desktop Layout - Two images per snap point */}
      <div className="hidden md:block h-[94dvh] w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth flex-grow [scroll-behavior:smooth] [overscroll-behavior:contain]">
        <section
          ref={section1Ref}
          onClick={(e) => handleDesktopSectionClick(e, 0)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="flex flex-row w-full max-w-3xl">
            <div className="relative w-1/2 h-[70vh]">
              <Image
                src="/IMG_6692.jpg"
                alt="MAANN Left Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={85}
                priority
              />
            </div>
            <div className="relative w-1/2 h-[70vh]">
              <Image
                src="/IMG_6707.jpg"
                alt="MAANN Right Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={85}
                priority
              />
            </div>
          </div>
        </section>

        <section
          ref={section2Ref}
          onClick={(e) => handleDesktopSectionClick(e, 1)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="flex flex-row w-full max-w-3xl">
            <div className="relative w-1/2 h-[70vh]">
              <Image
                src="/IMG_6693.jpg"
                alt="MAANN Left Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="relative w-1/2 h-[70vh]">
              <Image
                src="/IMG_6696.jpg"
                alt="MAANN Right Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section
          ref={section3Ref}
          onClick={(e) => handleDesktopSectionClick(e, 2)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="flex flex-row w-full max-w-3xl">
            <div className="relative w-1/2 h-[70vh]">
              <Image
                src="/S03-0069.jpg"
                alt="MAANN Left Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="relative w-1/2 h-[70vh]">
              <Image
                src="/S03-0066.jpg"
                alt="MAANN Right Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section
          ref={section4Ref}
          onClick={(e) => handleDesktopSectionClick(e, 3)}
          className="h-[94dvh] w-full snap-start flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="flex flex-row w-full max-w-3xl">
            <div className="relative w-1/2 h-[70vh]">
              <Image
                src="/S01-0039.jpg"
                alt="MAANN Left Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={85}
                loading="lazy"
              />
            </div>
            <div className="relative w-1/2 h-[70vh]">
              <Image
                src="/S01-0045.jpg"
                alt="MAANN Right Image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
