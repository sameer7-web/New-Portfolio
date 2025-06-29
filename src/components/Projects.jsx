import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const projects = {
  frontend: [
    {
      name: "Vyom  (Under-maintenance)",
      image: "/assets/vyom.png",
      liveLink: "https://vyom-zeta.vercel.app/",
      codeLink: "https://github.com/sameer7-web/VYOM",
      description: "Vyom is a small startup e-commerce brand selling beautiful earrings, chains, and bangles crafted for everyday elegance and charm.", 

    },
    {
      name: "RideWithMe",
      image: "/assets/ridewithme.png",
      liveLink: "https://ridewithme-tawny.vercel.app/",
      codeLink: "https://github.com/sameer7-web/Travel-website",
      description: "Made this for a solo traveler who gives tours—site lets people book trips, vibe with destinations, and start exploring.",
    },
    {
      name: "Business Landing Page",
      image: "/assets/Business.png",
      liveLink: "https://react-landing-page-ebon-ten.vercel.app/",
      codeLink: "https://github.com/sameer7-web/React-landing-page",
      description: "Modern React landing page with smooth animations, responsive design, and clear sections for portfolio presentation",
    },
    {
      name: "Apple website",
      image: "/assets/Apple.png",
      liveLink: "https://iphone-website-lovat.vercel.app/",
      codeLink: "https://github.com/sameer7-web/Iphone-Website",
      description: "A sleek, responsive iPhone landing page showcasing features, design, and innovation with modern animations.",
    },
    {
      name: "Expense Tracker",
      image: "/assets/Money.png",
      liveLink: "https://sameer7-web.github.io/Expense-tracker/",
      codeLink: "https://github.com/sameer7-web/Expense-tracker",
      description: "Simple and responsive expense tracker to manage your budget with real-time balance updates and history",
    },
    {
      name: "Recipe Website",
      image: "/assets/Receipe.png",
      liveLink: "https://sameer7-web.github.io/Captain-Recipe-/",
      codeLink: "https://github.com/sameer7-web/Captain-Recipe-",
      description: "Search and discover recipes with ingredients and instructions using a clean, responsive interface and API.",
    },
    {
      name: "QR Code generator",
      image: "/assets/Qr.png",
      liveLink: "https://sameer7-web.github.io/QR-generator/",
      codeLink: "https://github.com/sameer7-web/QR-generator",
      description: "Generate QR codes instantly for any text or URL using a simple and responsive interface.",
    },
    {
      name: "Todo List",
      image: "/assets/Todo.png",
      liveLink: "https://github.com/sameer7-web/QR-generator",
      codeLink: "https://sameer7-web.github.io/todo-list/",
      description: "Organize daily tasks efficiently with this clean, minimal, and responsive todo list web application.",
    },
  ],
  animation: [
    {
      name: "Animated Landing Page",
      image: "/assets/Bubble.png",
      liveLink: "https://mini-portfolio-phi-blond.vercel.app/",
      codeLink: "https://github.com/sameer7-web/Mini-Portfolio",
      description: "Showcases frontend skills, projects, and contact details with a smooth, responsive, and visually appealing layout.",
    },
    {
      name: "3D Robot Page",
      image :"/assets/AI.png",
      liveLink: "https://mini-ai-portfolio.vercel.app/",
      codeLink: "https://github.com/sameer7-web/Mini-AI-Portfolio",
      description: "Personal AI-powered portfolio with interactive elements, modern animations, and responsive design to showcase developer profile.",
    },
  ],
};

const tabs = [
  { key: "frontend", label: "Frontend Projects" },
  { key: "animation", label: "Animation Projects" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="projects" className="px-6 py-12 md:px-20 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        My Projects
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-2 font-medium rounded-full transition ${
              activeTab === tab.key
                ? "bg-blue-600 text-white"
                : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {projects[activeTab].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-60 object-fit rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                >
                  Live Link
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-800 border text-white rounded hover:bg-gray-900 transition text-sm"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
