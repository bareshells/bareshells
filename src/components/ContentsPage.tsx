"use client";

import { useMemo } from "react";

interface ContentsPageProps {
    items: { caption: string }[];
    onYearSelect: (year: string) => void;
    activeYear?: string;
}

export default function ContentsPage({ items, onYearSelect, activeYear }: ContentsPageProps) {
    const years = useMemo(() => {
        const uniqueYears = new Set<string>();
        items.forEach((item) => {
            const match = item.caption.match(/(\d{4})$/);
            if (match) {
                uniqueYears.add(match[1]);
            }
        });
        return Array.from(uniqueYears).sort((a, b) => b.localeCompare(a));
    }, [items]);

    return (
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex landscape:flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={(e) => {
                            e.stopPropagation();
                            onYearSelect(year);
                        }}
                        className={`text-left hover:opacity-50 transition-opacity cursor-pointer tracking-wider ${activeYear === year ? "text-gray-400" : "text-black"
                            }`}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>
    );
}
