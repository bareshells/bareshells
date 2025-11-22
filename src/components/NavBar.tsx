"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileDrawer from "./MobileDrawer";

export default function NavBar({ isSticky = false }) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check if viewport is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Handle menu button click
  const handleMenuClick = () => {
    if (isMobile) {
      setDrawerOpen(true);
    } else {
      setMenuExpanded(!menuExpanded);
    }
  };

  // Handle logo click
  const handleLogoClick = () => {
    if (pathname === "/" || pathname === "") {
      // Find the main scrollable container and scroll to top
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push("/");
    }
  };

  const menuItems = [
    { label: "FAQ", href: "/faq" },
    { label: "INSTAGRAM", href: "https://instagram.com/bareshells" },
    { label: "INQUIRE", href: "mailto:info@bareshells.com" },
  ];

  return (
    <>
      <div
        className={`flex justify-between items-center p-3 ${isSticky ? "bg-white" : "bg-white"
          } px-6`}
      >
        <div className="flex flex-row items-end">
          <a
            className="cursor-pointer hover:opacity-50 transition-opacity mr-8 flex items-center"
            onClick={handleMenuClick}
          >
            {/* Hamburger icon for mobile */}
            <span className="md:hidden">
              <Image
                src="/hamburger.svg"
                width={20}
                height={14}
                alt="Menu"
                priority
              />
            </span>
            {/* Text for desktop */}
            <span className="hidden md:inline">MENU</span>
          </a>

          {/* Desktop horizontal menu - hidden on mobile */}
          <div
            className={`hidden md:flex flex-row gap-6 transition-all duration-300 ease-in-out overflow-hidden ${menuExpanded ? "max-w-[600px] opacity-100" : "max-w-0 opacity-0"
              }`}
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="whitespace-nowrap cursor-pointer hover:opacity-50 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* BARESHELLS logo on the right */}
        <button
          onClick={handleLogoClick}
          className="cursor-pointer hover:opacity-50 transition-opacity"
        >
          BARESHELLS
        </button>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
}
