"use client";

import Accordion from "@/components/Accordion";
import NavBar from "@/components/NavBar";
import { faqData } from "@/data/faqData";

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
          <div className="w-full max-w-[20.5rem] md:max-w-[500px]">
            <div className="space-y-2">
              {faqData.map((faq, index) => (
                <Accordion key={index} title={faq.title}>
                  <div className="font-sans normal-case">
                    {faq.content}
                  </div>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
