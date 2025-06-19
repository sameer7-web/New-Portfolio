'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;

    if (savedTheme === 'dark') {
      html.classList.add('dark');
      setDarkMode(true);
    } else {
      html.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full fixed top-0 z-50 bg-white dark:bg-gray-900 text-black dark:text-white shadow transition-colors duration-300"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-blue-600 dark:text-white">
          Captain
        </motion.div>

        <nav className="hidden md:flex gap-10 font-medium">
          {['Home', 'About', 'Projects', 'Contact'].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="hover:text-blue-600 transition-colors"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <motion.button
            whileTap={{ scale: 0.8, rotate: 20 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? '🌙' : '☀️'}
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/src/assets/Sameer_maharana_Resume1.pdf"
            target="_blank"
  rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 text-sm transition"
          >
            Resume
          </motion.a>
        </div>
      </div>

      <div className="md:hidden flex justify-center py-2 bg-white dark:bg-gray-900 border-t gap-4 text-sm">
        {['Home', 'About', 'Projects', 'Contact'].map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-blue-600">
            {link}
          </a>
        ))}
      </div>
    </motion.header>
  );
};

export default Navbar;
