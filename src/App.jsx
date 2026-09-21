import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MouseSpotlight from './components/effects/MouseSpotlight';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

// Handle hash navigation smoothly after routing
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#090d16] text-zinc-100 flex flex-col selection:bg-emerald-500/30 selection:text-white">
        {/* Subtle Interactive Ambient Mouse Spotlight */}
        <MouseSpotlight />

        {/* Global Navigation */}
        <Navbar />

        {/* Hash / Route Scroll Handler */}
        <ScrollHandler />

        {/* Main Content Areas */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
