import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStacks = {
  frontend: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "React.js" },
    { name: "SASS" },
  ],
  animations: [
    { name: "Spline" },
    { name: "Framer Motion" },
    { name: "GSAP" },
    { name: "Accerntrity UI" },
    { name: "shadcn UI" },
  ],
  tools: [
    { name: "VS Code" },
    { name: "Figma" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "ChatGPT" },
    { name: "PowerPoint" },
    { name: "Excel" },
    { name: "Word" },
    { name: "Canva" },
    { name: "CapCut" },
  ],
};

const tabs = [
  { key: "frontend", label: "Frontend" },
  { key: "animations", label: "Animations" },
  { key: "tools", label: "Tools" },
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section className="px-6 py-12 md:px-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        My Tech Stack
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

      {/* Stack Items with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center"
        >
          {techStacks[activeTab].map(({ name }) => (
            <motion.div
              key={name}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-4 rounded-xl shadow-md flex items-center justify-center text-sm font-medium h-20"
              whileHover={{ scale: 1.05 }}
            >
              {name}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
