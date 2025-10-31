"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function NavbarAndScroll() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showDown, setShowDown] = useState(true);
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;

      // Navbar hanya muncul jika scroll > hero
      setShowNavbar(scrollY > heroHeight - 10);

      // Tombol Down muncul hanya di Hero
      setShowDown(scrollY < heroHeight);

      // Tombol Up muncul setelah Hero
      setShowUp(scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      {showNavbar && (
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 w-full flex justify-center gap-6 py-4 z-50 bg-gray-900 shadow-lg text-white"
        >
          {["Hero", "About", "Projects", "Contact"].map((label) => (
            <a
              key={label}
              onClick={() => scrollTo(label.toLowerCase())}
              className="relative cursor-pointer hover:text-purple-400 transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </motion.nav>
      )}

      {/* Scroll Up Button */}
      {showUp && (
        <motion.button
          onClick={() => scrollTo("hero")}
          animate={{ y: [0, -10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="fixed bottom-6 right-6 bg-gray-800 text-purple-400 p-3 rounded-full shadow-md hover:bg-purple-500 hover:text-white transition"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </>
  );
}
