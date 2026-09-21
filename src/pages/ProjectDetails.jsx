import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ExternalLink,
  Check,
  Server,
  Database,
  ShieldCheck,
  Layers,
  Terminal,
  Code2,
  Calendar,
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { projects } from '../data/projects';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const [copied, setCopied] = useState(false);

  // Find project
  const project = projects.find((p) => p.id === projectId);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-24">
        <h1 className="text-4xl font-bold text-white mb-3">Project Not Found</h1>
        <p className="text-zinc-400 text-sm max-w-md mb-8">
          The requested project could not be located. It may have been renamed or removed.
        </p>
        <Button href="/" icon={ArrowLeft} variant="default">
          Return to Portfolio
        </Button>
      </div>
    );
  }

  const handleCopyPlaceholder = (e) => {
    e.preventDefault();
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="emerald" size="md">
              {project.badge}
            </Badge>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-medium">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                target="_blank"
                variant="default"
                size="md"
                icon={ExternalLink}
              >
                Launch Live Demo
              </Button>
            ) : (
              <Button variant="secondary" size="md" disabled>
                Deployment Pending
              </Button>
            )}

            {project.githubUrl ? (
              <Button
                href={project.githubUrl}
                target="_blank"
                variant="outline"
                size="md"
                icon={GithubIcon}
              >
                View Repository
              </Button>
            ) : (
              <Button
                onClick={handleCopyPlaceholder}
                variant="outline"
                size="md"
                icon={GithubIcon}
              >
                {copied ? 'Repo Coming Soon' : 'Source Code (Private)'}
              </Button>
            )}
          </div>
        </motion.div>

        {/* Technical Architecture Mock Window Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl mb-12"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-mono text-zinc-400">
                https://api.{project.id}.internal/health
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400">HTTP 200 OK</span>
          </div>

          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm text-zinc-300 bg-gradient-to-b from-zinc-950 to-zinc-900/70 space-y-4">
            <div className="text-zinc-500">// System Health & Topology</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3.5 rounded-lg bg-zinc-900/70 border border-zinc-800">
                <span className="text-zinc-500 block text-[11px]">Pattern</span>
                <span className="text-white font-semibold">{project.architecture.pattern}</span>
              </div>
              <div className="p-3.5 rounded-lg bg-zinc-900/70 border border-zinc-800">
                <span className="text-zinc-500 block text-[11px]">Database</span>
                <span className="text-emerald-400 font-semibold">{project.architecture.database}</span>
              </div>
              <div className="p-3.5 rounded-lg bg-zinc-900/70 border border-zinc-800">
                <span className="text-zinc-500 block text-[11px]">Auth Strategy</span>
                <span className="text-cyan-400 font-semibold">{project.architecture.authStrategy}</span>
              </div>
              <div className="p-3.5 rounded-lg bg-zinc-900/70 border border-zinc-800">
                <span className="text-zinc-500 block text-[11px]">API Contract</span>
                <span className="text-indigo-400 font-semibold">{project.architecture.apiDesign}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Breakdown */}
        <div className="space-y-12">
          
          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span>Project Overview</span>
            </h2>
            <p className="text-base text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                The Problem
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                The Solution
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span>Technologies Deployed</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>Implemented Features</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-3"
                >
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-zinc-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Back Button */}
          <div className="pt-8 border-t border-zinc-800 flex justify-between items-center">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>

            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" variant="default" size="sm" icon={ExternalLink}>
                Visit Live Application
              </Button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
