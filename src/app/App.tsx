import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Approach } from '../components/sections/Approach';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/layout/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-300 flex flex-col font-sans selection:bg-accent-cyan/20 selection:text-accent-cyan">
          <Navbar />
          <main className="flex-1">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Approach />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};
