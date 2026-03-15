"use client";

interface ContentsPageProps {
  years: string[];
  onYearSelect: (year: string) => void;
  activeYear?: string;
  imageBottom?: number;
  imageTop?: number;
}

export default function ContentsPage({
  years,
  onYearSelect,
  activeYear,
  imageBottom = 0,
  imageTop = 0,
}: ContentsPageProps) {
  return (
    <>
      {/* Top bar */}
      {imageTop > 0 && (
        <div
          className="fixed top-0 left-0 w-full bg-white z-40 hidden md:block landscape:block"
          style={{ height: `${imageTop}px` }}
        />
      )}

      {/* Bottom bar with years */}
      <div
        className="z-40 hidden md:flex landscape:flex flex-row items-center justify-center gap-6 transition-all duration-300 fixed left-0 w-full px-6 bg-white"
        style={
          imageBottom > 0
            ? { top: `${imageBottom}px`, bottom: "0" }
            : { bottom: "0", height: "40px" }
        }
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
