import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileDrawer from "./MobileDrawer";

export default function NavBar({ isSticky = false }) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const menuItems = [
    { label: "FURNITURE", href: "/furniture" },
    { label: "SPACES", href: "/spaces" },
    { label: "SHOP", href: "/shop" },
  ];

  return (
    <>
      <div
        className={`flex justify-between items-center p-3 ${
          isSticky ? "bg-transparent" : "bg-white"
        } px-6`}
      >
        <div className="text-black flex flex-row items-end tracking-[2px] text-[11px]">
          <a
            className="cursor-pointer hover:opacity-50 transition-opacity mr-8"
            onClick={handleMenuClick}
          >
            MENU
          </a>

          {/* Desktop horizontal menu - hidden on mobile */}
          <div
            className={`hidden md:flex flex-row gap-6 transition-all duration-300 ease-in-out overflow-hidden ${
              menuExpanded ? "max-w-[300px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap cursor-pointer hover:opacity-50 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <Link href="/">
          <Image
            src="/Bareshells-Thin.svg"
            alt="BARESHELLS"
            width={100}
            height={16}
            className="w-auto h-3 object-contain mb-0.5"
          />
        </Link>
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
