"use client";

import Accordion from "@/components/Accordion";
import NavBar from "@/components/NavBar";
import { faqData } from "@/data/faqData";

export default function FAQPage() {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-x-hidden flex flex-col">
      {/* Sticky navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        <NavBar />
      </div>

      {/* Spacer matching navbar height */}
      <div className="h-[42px] shrink-0" />

      <div className="flex flex-col flex-grow">
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="w-full max-w-[20.5rem] md:max-w-[500px]">
            <div className="space-y-2">
              {faqData.map((faq, index) => (
                <Accordion key={index} title={faq.title}>
                  <div className="font-sans">
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
