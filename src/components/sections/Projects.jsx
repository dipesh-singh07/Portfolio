import React, { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import { projects as initialProjects } from '../../data/projects';
import { Database, Terminal, Server, PencilLine } from 'lucide-react';

const STORAGE_KEY = 'portfolio-projects';

export default function Projects() {
  const [projectList, setProjectList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projectList));
    } catch {
      // Ignore localStorage write failures in restricted environments.
    }
  }, [projectList]);

  const updateProject = (projectId, field, value) => {
    setProjectList((prev) =>
      prev.map((project) => {
        if (project.id !== projectId) return project;

        if (field === 'technologies' || field === 'features') {
          return { ...project, [field]: value.split(',').map((item) => item.trim()).filter(Boolean) };
        }

        return { ...project, [field]: value };
      })
    );
  };

  const addProject = () => {
    const newId = `project-${Date.now()}-${Math.random().toString(16).slice(2)}`;

    setProjectList((prev) => [
      ...prev,
      {
        id: newId,
        title: 'New Project',
        tagline: 'Write a short project summary.',
        badge: 'New',
        description: 'Describe the project and its goals.',
        status: 'In Progress',
        technologies: ['React', 'Node.js'],
        features: ['Add project features'],
      },
    ]);
  };

  const removeProject = (projectId) => {
    setProjectList((prev) => prev.filter((project) => project.id !== projectId));
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex-1">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Practical Implementations"
                title="Featured Projects"
                subtitle="Projects I've built and worked on. Real backend services, database schemas, and end-to-end web applications."
              />
            </ScrollReveal>
          </div>
          <button
            type="button"
            onClick={() => setIsEditing((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-cyan-500/40 hover:text-cyan-300"
          >
            <PencilLine className="w-3.5 h-3.5" />
            {isEditing ? 'Done' : 'Edit'}
          </button>
        </div>

        {!isEditing ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.12} className="h-full">
                <ProjectCard
                  project={project}
                  index={index}
                  onQuickView={() => setActiveModalProject(project)}
                />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={addProject}
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/15"
              >
                <PencilLine className="w-3.5 h-3.5" />
                Add Project
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projectList.map((project) => (
                <div key={project.id} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                  <div className="flex justify-end mb-3">
                    <button
                      type="button"
                      onClick={() => removeProject(project.id)}
                      className="rounded-md border border-red-500/30 bg-red-500/10 px-2 py-1 text-[10px] font-medium text-red-300 transition hover:bg-red-500/15"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="space-y-3">
                    <input
                      value={project.title}
                      onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-base font-bold text-white outline-none focus:border-cyan-500"
                    />
                    <input
                      value={project.tagline}
                      onChange={(e) => updateProject(project.id, 'tagline', e.target.value)}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-300 outline-none focus:border-cyan-500"
                    />
                    <input
                      value={project.badge}
                      onChange={(e) => updateProject(project.id, 'badge', e.target.value)}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-mono text-zinc-300 outline-none focus:border-cyan-500"
                    />
                    <textarea
                      value={project.description}
                      onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                      rows={4}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 outline-none focus:border-cyan-500"
                    />
                    <input
                      value={project.status}
                      onChange={(e) => updateProject(project.id, 'status', e.target.value)}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-mono text-emerald-300 outline-none focus:border-cyan-500"
                    />
                    <textarea
                      value={project.technologies.join(', ')}
                      onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                      rows={2}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-[11px] text-zinc-300 outline-none focus:border-cyan-500"
                    />
                    <textarea
                      value={project.features.join(', ')}
                      onChange={(e) => updateProject(project.id, 'features', e.target.value)}
                      rows={3}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-[11px] text-zinc-300 outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

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
