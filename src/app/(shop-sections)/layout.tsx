"use client";

import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function ShopSectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to update navbar position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden flex flex-col">
      {/* Mobile sticky navbar - always visible on small screens */}
      <div className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-sm md:hidden pt-safe">
        <NavBar isSticky={true} />
      </div>

      {/* Desktop always-visible navbar */}
      <div className="hidden md:block w-full bg-white">
        <NavBar isSticky={false} />
      </div>

      {/* Desktop sticky navbar that appears when scrolled */}
      {isScrolled && (
        <div className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-sm transition-all duration-300 hidden md:block">
          <NavBar isSticky={true} />
        </div>
      )}

      {children}
    </main>
  );
}
