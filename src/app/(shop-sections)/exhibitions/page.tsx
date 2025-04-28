"use client";

import SocialLinks from "@/components/SocialLinks";

export default function ExhibitionsPage() {
  return (
    <div className="w-full flex-grow flex flex-col bg-white">
      <div className="flex-grow flex flex-col justify-center items-center  ">
        <div className="max-w-lg   gap-10 p-10">
          <h1>
            Created for the 2025 MAANN Pop-Up in New York City this May. This
            collection embodies a modern, minimalist aesthetic while staying
            true to traditional Thai craftsmanship.
          </h1>
          <br />
          <h1>
            Our Triangle Cushion embodies heritage and comfort. Inspired by
            centuries-old culture, its signature triangular shape represents
            stability and mindfulness, making it a timeless piece for any space.
          </h1>
          <br />
          <a
            href="https://maps.google.com/?q=332+E+4TH+ST.+NEW+YORK,+NY+10009"
            className="inline-block hover:opacity-50 transition-opacity"
          >
            332 E 4TH ST. NEW YORK, NY 10009
          </a>
        </div>
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
