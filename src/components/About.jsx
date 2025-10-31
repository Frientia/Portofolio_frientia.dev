"use client";
import { motion } from "framer-motion";

export default function About() {
  const projects = [
    {
      name: "Attendance System",
      link: "https://github.com/Frientia/sistem_absensi",
      description: "A simple attendance management system built with PHP and MySQL."
    },
    {
      name: "E-Commerce",
      link: "https://github.com/Frientia/ukk_klaster3",
      description: "An e-commerce platform using PHP and MySQL."
    }
  ];

  const skills = ["PHP", "MySQL", "JavaScript", "Git", "GitHub"];

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900 text-white overflow-hidden"
    >
      {/* Floating background circles */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute w-[250px] h-[250px] rounded-full bg-purple-800 opacity-20 top-10 -left-20"
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: 45 }}
        transition={{ repeat: Infinity, duration: 40, ease: "easeInOut" }}
        className="absolute w-[200px] h-[200px] rounded-full bg-purple-700 opacity-20 bottom-10 -right-10"
      />

      {/* Header Image */}
      <motion.img
        src="https://preview.redd.it/okarun-cosplay-from-dan-da-dan-v0-ph4zggzkghwd1.jpg?width=640&crop=smart&auto=webp&s=d4b566f864ad020aa4e708bfbf333bbc4aa88a63"
        alt="Header Image"
        className="w-32 h-32 rounded-full border-2 border-purple-500 shadow-lg mb-6 object-cover"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-purple-400 mb-4 text-center"
      >
        Hi, I'm <span className="text-white">Muhamad Yajid Rizky</span> 👋
      </motion.h2>

      {/* About Me Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-300 max-w-xl text-center mb-6"
      >
        I’m an aspiring <span className="text-purple-400 font-semibold">backend developer</span> with
        a strong foundation in <span className="text-purple-400 font-semibold">PHP</span> and 
        <span className="text-purple-400 font-semibold"> MySQL</span>. Currently learning <span className="text-purple-400 font-semibold">JavaScript, Git, and GitHub</span> to move towards full-stack development.
      </motion.p>

      {/* Tech / Skills */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {skills.map((skill, idx) => (
          <span key={idx} className="px-3 py-1 bg-purple-800 rounded-full text-sm text-white shadow-sm">
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Projects */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            className="p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <h3 className="text-purple-400 font-semibold mb-1">{proj.name}</h3>
            <p className="text-gray-300 text-sm">{proj.description}</p>
          </a>
        ))}
      </motion.div>

      {/* GitHub Stats */}
      <motion.img
        src="https://github-readme-stats.vercel.app/api?username=frientia&show_icons=true&hide_title=true&count_private=true&hide=prs&theme=radical"
        alt="GitHub Stats"
        className="w-full max-w-lg rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
    </section>
  );
}
