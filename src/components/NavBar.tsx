"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileDrawer from "./MobileDrawer";

interface NavBarProps {
  onDrawerChange?: (open: boolean) => void;
}

const menuItems = [
  { label: "FAQ", href: "/faq" },
  { label: "Instagram", href: "https://instagram.com/bareshells" },
  { label: "Contact", href: "mailto:info@bareshells.com" },
];

export default function NavBar({ onDrawerChange }: NavBarProps) {
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

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setDrawerOpen(true);
      onDrawerChange?.(true);
    } else {
      setMenuExpanded(!menuExpanded);
    }
  };

  const handleLogoClick = () => {
    if (pathname === "/" || pathname === "") {
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center p-3 bg-white px-6">
        <div className="flex flex-row items-end">
          <button
            className="cursor-pointer hover:opacity-50 transition-opacity mr-8 flex items-center"
            onClick={handleMenuClick}
          >
            <span className="font-sans">Menu</span>
          </button>

          {/* Desktop horizontal menu - hidden on mobile */}
          <div
            className={`hidden md:flex flex-row gap-6 transition-all duration-300 ease-in-out overflow-hidden ${
              menuExpanded ? "max-w-[600px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="whitespace-nowrap cursor-pointer hover:opacity-50 transition-opacity font-sans"
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
          <Image
            src="/Bareshells Master Logo.png"
            width={120}
            height={16}
            alt="Bare Shells"
            priority
            className="h-[10px] md:h-[10px] w-auto"
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer
        isOpen={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          onDrawerChange?.(false);
        }}
        menuItems={menuItems}
      />
    </>
  );
}
