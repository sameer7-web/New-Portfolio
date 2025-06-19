import Spline from '@splinetool/react-spline';
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Left: Spline 3D Robot */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[500px]">
        <Spline scene="https://prod.spline.design/bszHJUCQ4p2os0Du/scene.splinecode" />
      </div>

      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Let's Connect</h2>

        <form
          method="POST"
          action="https://api.web3forms.com/submit"
          className="space-y-4"
        >
          {/* Web3Forms Hidden Access Key */}
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
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Email<span className="text-red-500"></span>
            </label>
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

          {/* ✅ Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        {/* Email Info */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          📧 Mail me at:{" "}
          <a href="mailto:sameermaharana1319@gmail.com" className="text-blue-600 hover:underline">
            sameermaharana1319@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 text-2xl text-gray-700 dark:text-white">
          <a
            href="https://www.linkedin.com/in/sameermaharana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sameermaharana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/sameermaharana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/sameermaharana"
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
