"use client";

import NavBar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const socialLinks = [
    { name: "Instagram", url: "http://instagram.com/bareshells" },
    { name: "Contact us", url: "mailto:bareshells@gmail.com" },
  ];

  // Handle scroll events to update navbar position
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setIsScrolled(window.scrollY > heroHeight - 42);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden">
      {/* Mobile sticky navbar - always visible on small screens */}
      <div className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-sm md:hidden pt-safe">
        <NavBar isSticky={true} />
      </div>

      {/* Desktop sticky navbar that appears when scrolled */}
      {isScrolled && (
        <div className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-sm transition-all duration-300 hidden md:block">
          <NavBar isSticky={true} />
        </div>
      )}

      {/* Hero video section */}
      <div ref={heroRef} className="md:h-[100dvh] relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain md:object-cover z-0 md:mt-0 mt-[42px]"
        >
          <source src="/plum-showcase-single.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent z-5"></div>

        <div className="absolute bottom-0 left-0 w-full z-10 hidden md:block pb-safe">
          <NavBar />
        </div>
      </div>

      {/* Collections content */}
      <div>
        <div className="flex flex-col w-full h-[55dvh] md:h-[90.5dvh] bg-white justify-center items-center">
          <a
            href="/exhibitions"
            className="flex flex-col hover:opacity-50 transition-opacity tracking-[2px] text-[11px] uppercase justify-center items-center"
          >
            <h1>FOR MAANN</h1>
            <h1>332 E 4TH ST.</h1>
            <h1>NEW YORK, NY 10009</h1>
          </a>
        </div>
        <div className="flex flex-row gap-8 justify-center items-center tracking-[2px] text-[11px] mb-4 uppercase pb-safe">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              key={link.name}
              className="hover:opacity-50 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
