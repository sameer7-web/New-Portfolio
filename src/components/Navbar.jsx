'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // State to track the active link

  // Theme logic (existing)
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

  // Effect to handle active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      let currentActive = 'home'; // Default to home

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the top of the section is within the viewport (or slightly above)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active link

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle link clicks
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName.toLowerCase());
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
              className={`relative hover:text-blue-600 transition-colors ${
                activeLink === link.toLowerCase()
                  ? 'text-blue-600 dark:text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:dark:bg-white after:rounded-full after:transition-all after:duration-300 after:scale-x-100'
                  : 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:dark:bg-white after:rounded-full after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100'
              }`}
              onClick={() => handleLinkClick(link)}
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

          {/* Clerk Authentication Integration */}
          <SignedOut>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 text-sm transition cursor-pointer"
            >
              <SignInButton mode="modal">
                <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 text-sm transition">
                  Sign In
                </button>
              </SignInButton>
            </motion.div>
          </SignedOut>
          <SignedIn>
            {/* Increase the size of the UserButton photo */}
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: '40px', // Example: Increase width
                    height: '40px', // Example: Increase height
                  },
                },
              }}
            />
          </SignedIn>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex justify-center py-2 bg-white dark:bg-gray-900 border-t gap-4 text-sm">
        {['Home', 'About', 'Projects', 'Contact'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`hover:text-blue-600 ${
              activeLink === link.toLowerCase() ? 'text-blue-600 dark:text-white' : ''
            }`}
            onClick={() => handleLinkClick(link)}
          >
            {link}
          </a>
        ))}
      </div>
    </motion.header>
  );
};

export default Navbar;