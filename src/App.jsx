import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import { ClerkProvider } from '@clerk/clerk-react';

const App = () => {
  const projectRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
  return (
    <>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <Navbar onProjectsClick={scrollToProjects} />
      <Hero />
      <About />
      <TechStack />
      
      <section ref={projectRef}>
        <Projects />
      </section>

      <ContactSection />
      </ClerkProvider>
    </>
  );
};

export default App;
