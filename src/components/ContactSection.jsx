'use client';
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* 🎥 Animation (hidden on small screens) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-lg bg-[#F0F9FF]">
          {!isMobile ? (
            <Spline scene="https://prod.spline.design/HApQQ2j-dQyBuPu3/scene.splinecode" />
          ) : (
           <div className="w-full h-full rounded-full overflow-hidden">
  <img
    src="/assets/3dcontactimage.png"
    alt="3D Contact"
    className="w-full h-full object-cover rounded-full"
  />
</div>

          )}
        </div>
      </div>

      {/* 📬 Contact Form */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Let's Connect</h2>

        <form method="POST" action="https://api.web3forms.com/submit" className="space-y-4">
          <input type="hidden" name="access_key" value="975341b5-6b9c-4043-b46f-e3cb75e88b6a" />

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          📧 Mail me at:{' '}
          <a
            href="mailto:sameermaharana1319@gmail.com"
            className="text-blue-600 hover:underline"
          >
            sameermaharana1319@gmail.com
          </a>
        </div>

        <div className="flex gap-6 mt-4 text-2xl text-gray-700 dark:text-white">
          <a
            href="https://www.linkedin.com/in/sameer-maharana/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sameer7-web"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/_sameer_maharana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Captain1319000?t=XdMZvRC8Pju5DwHfC9VNJQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
