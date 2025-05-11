"use client";

import NavBar from "@/components/NavBar";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";

export default function HomePage() {
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

      {/* On mobile: flex container to ensure content fills screen */}
      {/* On desktop: scroll snap container */}
      <div className="flex flex-col md:h-[100dvh] md:overflow-y-scroll md:snap-y md:snap-mandatory flex-grow scrollbar-hide">
        {/* Hero video section */}
        {/* <div
          ref={heroRef}
          className="mt-[42px] md:mt-0 md:h-[100dvh] md:min-h-[100dvh] relative overflow-hidden md:snap-start"
        >
          <Image
            src="/IMG_1058_rotate.png"
            alt="Concrete image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
            priority
            quality={75}
          />

          <div
            ref={navbarRef}
            className="absolute bottom-0 left-0 w-full z-10 hidden md:block pb-safe"
          >
            <NavBar />
          </div>
        </div> */}

        {/* Collections content */}
        <div className="w-full flex-grow flex flex-col bg-white md:h-[100dvh] md:min-h-[100dvh] md:snap-start">
          <div className="flex-grow flex flex-col justify-center items-center">
            <div className="flex flex-row w-full max-w-3xl p-4">
              <a href="/exhibitions" className="w-1/2 relative group">
                <div className="absolute inset-0 bg-black opacity-0 md:group-hover:opacity-10 transition-opacity z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity z-20">
                  <span className="text-white">exhibitions</span>
                </div>
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/IMG_6692.jpg"
                    alt="MAANN Left Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                </div>
              </a>
              <a href="/collections" className="w-1/2 relative group">
                <div className="absolute inset-0 bg-black opacity-0 md:group-hover:opacity-10 transition-opacity z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity z-20">
                  <span className="text-white">collections</span>
                </div>
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/S03-0066.jpg"
                    alt="MAANN Right Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-auto">
            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  );
}
