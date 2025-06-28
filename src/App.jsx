import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';

const App = () => {
  const projectRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onProjectsClick={scrollToProjects} />
      <Hero />
      <About />
      <TechStack />
      
      <section ref={projectRef}>
        <Projects />
      </section>

      <ContactSection />
    </>
  );
};

export default App;
