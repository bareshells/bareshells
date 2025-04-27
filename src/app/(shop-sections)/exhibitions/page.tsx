"use client";

export default function SpacesPage() {
  return (
    <div className="flex flex-col w-full h-[94dvh] bg-white justify-center items-center tracking-[2px] text-[11px] pb-safe gap-10">
      <div className="max-w-lg uppercase tracking-[2px] text-[11px]">
        <h1>
          Created exclusively for the 2025 MAANN Pop-Up in New York City this
          May, this collection embodies a modern, minimalist aesthetic while
          staying true to traditional Thai craftsmanship.
        </h1>
        <br />
        <h1>
          Our Thai Triangle Cushion embodies heritage and comfort. Inspired by
          centuries-old Thai culture, its signature triangular shape represents
          stability and mindfulness, making it a timeless piece for any space.
        </h1>
        <br />
        <h1>332 E 4TH ST. NEW YORK, NY 10009</h1>
      </div>
      <a
        className="uppercase hover:opacity-50 transition-opacity"
        href="/collections"
      >
        view collection
      </a>
    </div>
  );
}
