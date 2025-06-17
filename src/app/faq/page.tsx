"use client";

import NavBar from "@/components/NavBar";
import SocialLinks from "@/components/SocialLinks";
import { useEffect, useRef, useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 text-left cursor-pointer hover:opacity-50 transition-opacity relative"
      >
        <h3 className="pr-8">{title}</h3>
        <span
          className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${contentHeight}px` }}
      >
        <div className="pb-4 space-y-4">{children}</div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden flex flex-col">
      {/* Mobile sticky navbar - always visible on small screens */}
      <div className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur-sm md:hidden pt-safe">
        <NavBar isSticky={true} />
      </div>

      {/* Desktop sticky navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm transition-all duration-300 hidden md:block">
        <NavBar isSticky={true} />
      </div>

      <div className="flex flex-col flex-grow mt-[42px] md:mt-0">
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="w-full max-w-[20.5rem] md:max-w-[768px]">
            <div className="space-y-2">
              <Accordion title="ORDERS & SHIPPING">
                <div className="space-y-4">
                  <p>
                    FIND US IN STORE AT{" "}
                    <a
                      href="https://maps.google.com/?q=332+E+4TH+ST.+NEW+YORK,+NY+10009"
                      className="hover:opacity-50 transition-opacity"
                    >
                      332 E 4TH ST.
                    </a>
                  </p>
                  <p>
                    WE SHIP WORLDWIDE FROM OUR STUDIO IN BANGKOK, THAILAND.
                    PROCESSING TAKES 1 to 2 BUSINESS DAYS. SHIPPING TIME DEPENDS
                    ON YOUR LOCATION AND SELECTED METHOD. YOU&apos;LL RECEIVE A
                    TRACKING LINK ONCE YOUR ORDER SHIPS.
                  </p>
                </div>
              </Accordion>

              <Accordion title="RETURNS & EXCHANGES">
                <div className="space-y-4">
                  <p>
                    RETURNS ARE ACCEPTED WITHIN 14 DAYS OF DELIVERY FOR ITEMS IN
                    ORIGINAL CONDITION, WITH COMPLETE PACKAGING. RETURN SHIPPING
                    IS AT THE CUSTOMER&apos;S EXPENSE UNLESS THE ITEM IS FAULTY.
                    CONTACT US FIRST TO CONFIRM AVAILABILITY.
                  </p>
                </div>
              </Accordion>

              <Accordion title="PRODUCTION">
                <div className="space-y-4">
                  <p>
                    OUR PIECES ARE PRODUCED IN-HOUSE OR BY TRUSTED PARTNERS WHO
                    SHARE OUR VALUES AROUND QUALITY AND SOURCING. EACH ITEM
                    COMES WITH CARE INSTRUCTIONS.
                  </p>
                </div>
              </Accordion>

              <Accordion title="COMMISSION & COLLABORATION">
                <div className="space-y-4">
                  <p>
                    FOR BESPOKE OR COLLABORATIONS, CONTACT US AT{" "}
                    <a
                      href="mailto:info@bareshells.com"
                      className="hover:opacity-50 transition-opacity"
                    >
                      info@bareshells.com
                    </a>
                    .
                  </p>
                </div>
              </Accordion>

              <Accordion title="CONTACT">
                <div className="space-y-4">
                  <p>
                    EMAIL{" "}
                    <a
                      href="mailto:info@bareshells.com"
                      className="hover:opacity-50 transition-opacity"
                    >
                      info@bareshells.com
                    </a>{" "}
                    AND FOLLOW US ON{" "}
                    <a
                      href="http://instagram.com/bareshells"
                      className="hover:opacity-50 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      INSTAGRAM
                    </a>{" "}
                    FOR UPDATES. WE TYPICALLY RESPOND WITHIN 1 to 2 BUSINESS
                    DAYS.
                  </p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}
