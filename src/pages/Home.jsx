import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Learning from '../components/sections/Learning';
import Education from '../components/sections/Education';
import ExperienceSection from '../components/sections/ExperienceSection';
import Certifications from '../components/sections/Certifications';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';

/**
 * Home page — assembles all portfolio sections.
 *
 * Sections that auto-hide when their data arrays are empty:
 *   - Education    (src/data/education.js)
 *   - Experience   (src/data/experience.js)
 *   - Certifications (src/data/certifications.js)
 *   - Achievements (src/data/achievements.js)
 *
 * Always visible:
 *   - Hero, About, Skills, Projects, Learning, Contact
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      {/* These sections render only when their data arrays are non-empty */}
      <Education />
      <ExperienceSection />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  );
}
