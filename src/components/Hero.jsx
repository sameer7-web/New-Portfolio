'use client';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900 text-black dark:text-white">
      
      {/* 🔵 Particle Background */}
      <ParticlesBackground />

      {/* 🔵 Parallax Section */}
      <Parallax strength={300}>
        <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 pt-28 md:pt-32 pb-10 transition-colors">

          {/* ✅ Text First on All Screens */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6 w-full md:w-1/2"
          >
            <button className="relative z-0 px-6 py-4 text-sm font-medium mt-10 md:mt-0 text-white bg-black rounded-full overflow-hidden group">
  <span className="absolute inset-0 z-[-1] rounded-full border-2 bg-gradient-to-r from-blue-300 via-blue-600 to-blue-900 animate-[borderflow_4s_linear_infinite] bg-[length:400%_400%]"></span>
  <span className="relative z-10">Developer</span>
</button>


            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <TypeAnimation
                sequence={[
                  'Sameer Maharana',
                  1000,
                  'UI Developer',
                  1000,
                  'Frontend Developer',
                  1000,
                  'React.js Developer',
                  1000,
                  'Captain on Mission to save UI',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-2 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
            >
              Explore Projects
            </motion.button>
          </motion.div>

          {/* ✅ Robot Below Text on Mobile (with mt-8 spacing) */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[600px] mx-auto mb-12 md:mb-0"
          >
            <Spline scene="https://prod.spline.design/G17FEx1V4njU824n/scene.splinecode" />
          </motion.div>
        </section>
      </Parallax>
    </div>
  );
};

export default Hero; 