"use client";

import SocialLinks from "@/components/SocialLinks";

export default function ExhibitionsPage() {
  return (
    <div className="flex flex-col flex-grow mt-[42px] md:mt-0">
      <div className="flex-grow flex flex-col justify-center items-center gap-4">
        <p className="text-center w-full max-w-[20.5rem] md:max-w-[768px]">
          Created for the 2025 MAANN Pop-Up in New York City this May. This
          collection embodies a modern, minimalist aesthetic while staying true
          to traditional Thai craftsmanship.
        </p>
        <p className="text-center w-full max-w-[20.5rem] md:max-w-[768px]">
          Our Triangle Cushion embodies heritage and comfort. Inspired by
          centuries-old culture, its signature triangular shape represents
          stability and mindfulness, making it a timeless piece for any space.
        </p>
        <a
          href="https://maps.google.com/?q=332+E+4TH+ST.+NEW+YORK,+NY+10009"
          className="inline-block hover:opacity-50 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          332 E 4TH ST. NEW YORK, NY 10009
        </a>
        <a
          className="hover:opacity-50 transition-opacity mb-8"
          href="/collections"
        >
          view collection
        </a>
      </div>
      <div className="mt-auto">
        <SocialLinks />
      </div>
    </div>
  );
}
