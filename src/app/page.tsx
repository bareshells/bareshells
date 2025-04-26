"use client";

import NavBar from "@/components/NavBar";
import { useEffect, useRef, useState } from "react";

function App() {
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
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Sticky navbar that appears when scrolled */}
      {isScrolled && (
        <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm transition-all duration-300">
          <NavBar isSticky={true} />
        </div>
      )}

      {/* Hero video section */}
      <div ref={heroRef} className="h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover z-0"
        >
          <source src="/plum-showcase-single.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-0 left-0 w-full z-10">
          <NavBar />
        </div>
      </div>

      {/* Collections content */}
      <div>
        <div className="flex flex-col w-full h-screen bg-white justify-center items-center tracking-[2px] text-[11px]">
          <h1>322 E 4TH ST.</h1>
          <h1>NEW YORK, NY 10009</h1>
        </div>
        <div className="flex flex-row gap-8 justify-center items-center tracking-[2px] text-[11px] mb-4 uppercase">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              key={link.name}
              className="hover:underline underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
