"use client";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Learning JavaScript",
    description: "Repository for practicing JavaScript concepts.",
    link: "https://github.com/Frientia/learning_javascript",
    image: "/project.jpg", // bisa diganti dengan screenshot proyek
  },
  {
    title: "Attendance System",
    description: "PHP + MySQL attendance management system.",
    link: "https://github.com/Frientia/sistem_absensi",
    image: "/project.jpg",
  },
  {
    title: "Display Website Kampus",
    description: "Campus website display project using Blade.",
    link: "https://github.com/Frientia/display_website_kampus",
    image: "/project.jpg",
  },
  {
    title: "Sewa Mobil",
    description: "Simple car rental website.",
    link: "https://github.com/Frientia/sewa_mobil",
    image: "/project.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-6 bg-gray-950 text-white py-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-semibold text-purple-400 mb-8 md:mb-10"
      >
        Projects
      </motion.h2>

      {/* Grid container - Optimized for mobile (2 cards) and desktop (3-4 cards) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 w-full max-w-6xl">
        {projectList.map((proj, index) => (
          <motion.a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Gambar project */}
            <div className="h-32 md:h-40 w-full overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Judul & deskripsi */}
            <div className="p-3 md:p-4 text-center flex-1 flex flex-col justify-center">
              <h3 className="text-purple-400 font-semibold mb-1 md:mb-2 text-sm md:text-base">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm leading-tight">
                {proj.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}