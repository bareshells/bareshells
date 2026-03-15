"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
}

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export default function MobileDrawer({
  isOpen,
  onClose,
  menuItems,
}: MobileDrawerProps) {
  const router = useRouter();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleNavigation = (href: string) => {
    onClose();
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] w-screen max-w-[100vw] bg-white z-[60] transform transition-transform duration-300 ease-in-out flex flex-col pb-safe ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 hover:opacity-50 transition-opacity z-50"
          aria-label="Close menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1L1 15"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M1 1L15 15"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="flex flex-col p-8 gap-8 mt-16 overflow-y-auto">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="cursor-pointer hover:opacity-50 transition-opacity font-sans"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
