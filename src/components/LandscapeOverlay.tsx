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
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <span
        className="material-symbols-outlined text-gray-400"
        style={{
          fontSize: 48,
          fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        }}
      >
        screen_rotation
      </span>
    </div>
  );
}
