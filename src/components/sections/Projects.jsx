import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import { projects } from '../../data/projects';
import { Database, Terminal, Server } from 'lucide-react';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Practical Implementations"
            title="Featured Projects"
            subtitle="Projects I've built and worked on. Real backend services, database schemas, and end-to-end web applications."
          />
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.12} className="h-full">
              <ProjectCard
                project={project}
                index={index}
                onQuickView={() => setActiveModalProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Quick Modal if triggered */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

        {/* Bottom Banner */}
        <ScrollReveal delay={0.25} className="mt-16">
          <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Database & API Design Integrity
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                  All projects feature structured schemas, Mongoose models, REST conventions, and server-side validation to guarantee data consistency.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                <Server className="w-3.5 h-3.5 text-emerald-400" /> MVC Controllers
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Clean Endpoints
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
