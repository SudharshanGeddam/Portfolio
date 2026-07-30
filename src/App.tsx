import { useState, useEffect, useRef } from 'react';
import { GridBackground } from './components/GridBackground';
import { CursorGlow } from './components/CursorGlow';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { FeaturedWork } from './components/FeaturedWork';
import { TechProfile } from './components/TechProfile';
import { Journey } from './components/Journey';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import './components.css';

const SECTION_IDS = ['work', 'skills', 'journey', 'certifications', 'contact'];

function getActiveSection(): string {
  const scrollY = window.scrollY + window.innerHeight * 0.35;
  for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
    const el = document.getElementById(SECTION_IDS[i]);
    if (el && el.offsetTop <= scrollY) {
      return SECTION_IDS[i];
    }
  }
  return SECTION_IDS[0];
}

function App() {
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
  const rafRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setActiveSection(getActiveSection());
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="app-layout">
      <GridBackground />
      <CursorGlow />

      <div className="app-grid">
        <div className="sidebar-col">
          <Hero activeSection={activeSection} />
        </div>

        <main className="main-col">
          <FeaturedWork />
          <TechProfile />
          <Journey />
          <Certifications />
          <Contact />
        </main>
      </div>

      <Navigation activeSection={activeSection} />
    </div>
  );
}

export default App;
