'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 text-black dark:text-white py-20 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-16">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 flex justify-center"
          >
            <img
              src="/src/assets/porfile-full.png"
              alt="Sameer Maharana"
              className="rounded-2xl shadow-lg w-90 h-90 object-cover"
            />
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full sm:w-1/2 text-center sm:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              I’m Sameer Maharana, a passionate frontend developer who enjoys building clean and modern user interfaces. I specialize in HTML, CSS, JavaScript, Tailwind CSS, and React.js. I’ve worked on several freelance projects for students and startups, bringing ideas to life through intuitive and beautiful web apps.
            </p>
            <a
              href="/src/assets/Sameer_maharana_Resume1.pdf"
              target="_blank"
  rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Bottom: Education & Experience Boxes */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Education Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 shadow-md border border-blue-200 dark:border-gray-600 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h3>
            <ol className="border-l-4 border-blue-500 pl-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li><strong>SSC</strong> – 2019</li>
              <li><strong>HSC</strong> – 2021</li>
              <li><strong>BCA</strong> – 2024</li>
              <li><strong>NIMCET</strong> – AIR 1313</li>
              <li><strong>MAH MCA CET</strong> – 86.16 Percentile</li>
            </ol>
          </motion.div>

          {/* Experience Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 shadow-md border border-blue-200 dark:border-gray-600 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-4 flex items-center gap-2">
              <FaLaptopCode /> Experience
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 text-sm">
              <li>Worked as a freelancer in HTML, CSS, JavaScript, Tailwind CSS, and React.js</li>
              <li>Built multiple projects for students as a frontend developer</li>
              <li>Specialized in building responsive, user-friendly interfaces</li>
              <li>Created custom UI components using React and Tailwind</li>
              <li>Collaborated with students and mentors to deliver academic projects</li>
              <li>Converted Figma/UI designs to pixel-perfect websites</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;