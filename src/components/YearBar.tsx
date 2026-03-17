"use client";

import { useEffect, useRef } from "react";

interface YearBarProps {
  years: string[];
  activeYear: string;
  onYearSelect: (year: string) => void;
  barHeight: string;
}

export default function YearBar({
  years,
  activeYear,
  onYearSelect,
  barHeight,
}: YearBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const activeElement = scrollRef.current.querySelector(
        `[data-year="${activeYear}"]`
      ) as HTMLElement;

      if (activeElement) {
        const container = scrollRef.current;
        const scrollLeft =
          activeElement.offsetLeft -
          container.clientWidth / 2 +
          activeElement.clientWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeYear]);

  return (
    <>
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 w-full bg-white z-40"
        style={{ height: barHeight }}
      />

      {/* Bottom bar with years */}
      <div
        className="fixed bottom-0 left-0 w-full z-40 bg-white flex flex-col justify-center"
        style={{ height: barHeight }}
      >
        <div className="relative w-full h-14 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex items-center gap-8 overflow-x-auto no-scrollbar h-full px-[50vw] snap-x snap-mandatory"
          >
            {years.map((year) => (
              <button
                key={year}
                data-year={year}
                onClick={(e) => {
                  e.stopPropagation();
                  onYearSelect(year);
                }}
                className={`snap-center shrink-0 font-light transition-opacity duration-300 ${
                  activeYear === year
                    ? "opacity-100 text-black"
                    : "opacity-30 text-gray-500"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
