"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [showContent, setShowContent] = useState(false);

  const socialLinks = [
    { name: "Instagram", url: "http://instagram.com/bareshells" },
    // { name: "Collection", url: "mailto:bareshells@gmail.com" },
    { name: "Contact", url: "mailto:bareshells@gmail.com" },
  ];

  return (
    <main className="relative h-dvh w-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/plum-showcase.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 opacity-40 bg-[rgb(0,0,0,0.5)]"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 h-full w-full">
        <div className="mt-6 flex gap-2 flex-col">
          <button
            onClick={() => setShowContent(!showContent)}
            className="text-white px-6 py-2 rounded-full 
            hover:opacity-50 transition-all duration-300 tracking-[4px] text-[16px]"
          >
            BARESHELLS
          </button>

          <AnimatePresence>
            {showContent && (
              <div className="absolute bottom-14 w-full px-14 flex flex-col sm:flex-row justify-between gap-6 font-[Helvetica] font-extralight text-[12px]">
                {/* Text Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex max-w-[400px] items-end"
                >
                  <div>
                    <p className="text-white/90 leading-snug text-sm">
                      Bareshells is a design studio that celebrates the harmony
                      of simplicity and substance.
                    </p>
                    <br />
                    <p className="text-white/90 leading-snug text-sm">
                      We craft objects and furniture with refined precision,
                      using honest materials and clean, intentional lines. Each
                      piece is designed to complement a space, allowing it to
                      breathe with a quiet elegance and effortless
                      sophistication.
                    </p>
                  </div>
                </motion.div>
                <hr className="border-[0.1px] sm:hidden" />
                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="justify-around items-start sm:items-end flex sm:flex-col sm:justify-end sm:gap-1"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group"
                    >
                      <span
                        className="text-white hover:opacity-50 transition-all duration-300 
                                   font-light tracking-wider flex items-center gap-2"
                      >
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

export default App;
