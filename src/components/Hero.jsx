"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen px-6 overflow-hidden text-white bg-gradient-to-b from-[#0d001a] to-[#1a0033]"
    >
      {/* Animated background circles */}
        <motion.div
        animate={{ y: [0, 20, 0], rotate: 360 }} // float + rotate
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-900 opacity-20 -top-20 -left-20"
        />

        <motion.div
        animate={{ y: [0, -15, 0], rotate: -360 }} // float + rotate
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full bg-purple-700 opacity-20 -bottom-20 -right-20"
        />

        {/* Profile photo with smooth floating */}
        <motion.div
        animate={{ y: [0, -10, 0] }} // hanya gerakan vertikal
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-purple-500 shadow-xl mb-4"
        >
        <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
        />
        </motion.div>

      {/* Text content with stagger animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="text-center"
      >
        <motion.h1
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 relative"
        >
          Hi, I'm <span className="relative">
            Frientia
            <motion.span
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute left-0 bottom-0 w-full h-1 bg-purple-500 origin-left"
            />
          </span> 👋
        </motion.h1>
        <motion.p
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="text-gray-300 text-sm md:text-base max-w-xs mx-auto"
        >
          Web Developer crafting smooth, modern, and interactive user experiences.
        </motion.p>

        {/* Scroll down button */}
        <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }} // hanya gerakan vertikal
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-6 inline-block p-3 border-2 border-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition"
            >
            ↓
        </motion.a>
      </motion.div>
    </section>
  );
}
