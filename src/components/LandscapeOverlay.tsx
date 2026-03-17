"use client";

import { useState, useEffect } from "react";

export default function LandscapeOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => {
      const isMobile = window.innerWidth < 1024;
      const isLandscape = window.innerWidth > window.innerHeight;
      setShow(isMobile && isLandscape);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-6">
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400 animate-pulse"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
      <p className="font-light text-gray-500">
        Please rotate your device to portrait
      </p>
    </div>
  );
}
