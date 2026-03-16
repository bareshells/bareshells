"use client";

const BAR_HEIGHT = 149;

interface ContentsPageProps {
  years: string[];
  onYearSelect: (year: string) => void;
  activeYear?: string;
}

export default function ContentsPage({
  years,
  onYearSelect,
  activeYear,
}: ContentsPageProps) {
  return (
    <>
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 w-full bg-white z-40"
        style={{ height: `${BAR_HEIGHT}px` }}
      />

      {/* Bottom bar with years */}
      <div
        className="z-40 flex flex-row items-center justify-center gap-6 fixed bottom-0 left-0 w-full px-6 bg-white"
        style={{ height: `${BAR_HEIGHT}px` }}
      >
        {years.map((year) => (
          <button
            key={year}
            onClick={(e) => {
              e.stopPropagation();
              onYearSelect(year);
            }}
            className={`hover:opacity-50 transition-opacity cursor-pointer tracking-wider font-sans ${
              activeYear === year ? "text-gray-400" : "text-black"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </>
  );
}
