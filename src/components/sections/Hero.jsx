import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  ArrowDown,
  FileDown,
  Mail,
  Server,
  Database,
  Code2,
  Terminal,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profile } from '../../data/profile';
import { socialLinks } from '../../data/socialLinks';
import Button from '../ui/Button';

export default function Hero() {
  // Parallax motion values for profile photo on desktop
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);
  const photoTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ['-10px', '10px']);
  const photoTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ['-10px', '10px']);

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-indigo-500/10 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Introduction & Details (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-zinc-900/90 text-emerald-400 border border-emerald-500/30 shadow-[0_0_16px_rgba(16,185,129,0.15)] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profile.role.toUpperCase()}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                {profile.name}
              </span>
              .
            </h1>

            {/* Supporting Hero Statement */}
            <p className="text-xl sm:text-2xl font-medium text-zinc-200 tracking-tight mb-4">
              &ldquo;{profile.headline}&rdquo;
            </p>

            {/* Short Narrative Description */}
            <p className="text-base text-zinc-400 leading-relaxed max-w-xl mb-8">
              {profile.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button
                href="#projects"
                onClick={handleScrollToProjects}
                variant="default"
                size="lg"
                icon={ArrowDown}
              >
                View Projects
              </Button>

              {/* Resume download — place your PDF at: public/resume.pdf */}
              <Button
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                download={`${profile.name.replace(/\s+/g, '_')}_Resume.pdf`}
                variant="outline"
                size="lg"
                icon={FileDown}
              >
                Download Resume
              </Button>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                Reach Out:
              </span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-2.5 rounded-lg bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-105"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Micro Tech Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-emerald-400" /> Node.js / Express
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-cyan-400" /> MongoDB
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" /> React.js
              </span>
              <span className="px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" /> REST APIs
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Framed Profile Photograph (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="lg:col-span-5 flex justify-center lg:justify-end perspective-1000"
          >
            <div className="relative group w-full max-w-[360px] sm:max-w-[400px]">
              {/* Subtle background decorative aura */}
              <div
                className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-indigo-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 -z-10"
                aria-hidden="true"
              />

              {/* Framed Card Container with Parallax Translation */}
              <motion.div
                style={{
                  x: photoTranslateX,
                  y: photoTranslateY,
                }}
                className="relative rounded-2xl bg-zinc-900/90 border border-zinc-700/80 p-2.5 shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:border-zinc-500/80"
              >
                {/* Photo Element */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-950">
                  <img
                    src={profile.profileImage}
                    alt={`${profile.name} - ${profile.role}`}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  
                  {/* Subtle inner gradient shadow at bottom for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Status Pill over image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-zinc-950/85 border border-zinc-800/90 backdrop-blur-md flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-white">{profile.name}</span>
                        <span className="text-[11px] text-zinc-400">Full-Stack / Backend</span>
                      </div>
                    </div>
                    <code className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-emerald-400 border border-zinc-700">
                      MERN
                    </code>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
