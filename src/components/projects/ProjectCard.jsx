import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ExternalLink, Check, ArrowRight, Server, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectCard({ project, index }) {
  const [copied, setCopied] = useState(false);

  // 3D Tilt Motion setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['4deg', '-4deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-4deg', '4deg']);

  const handleMouseMove = (e) => {
    // Check if device has coarse pointer (touch)
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopyPlaceholder = (e) => {
    e.preventDefault();
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700/80 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between"
    >
      <div>
        {/* Technical Window Mock Preview */}
        <div className="relative rounded-xl bg-zinc-950 border border-zinc-800 overflow-hidden mb-6 group-hover:border-zinc-700/80 transition-all">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-[11px] font-mono text-zinc-400">
                api.{project.id}.v1
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: project.accentColor }}
              />
              <span className="text-[10px] font-mono text-zinc-400">
                {project.status}
              </span>
            </div>
          </div>

          {/* Visual Architecture Representation */}
          <div className="p-5 font-mono text-xs text-zinc-300 bg-gradient-to-b from-zinc-950 to-zinc-900/50">
            <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-3">
              <span className="text-emerald-400 font-semibold">{project.badge}</span>
              <span>0{index + 1} // MERN</span>
            </div>

            <div className="space-y-1 text-zinc-400">
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-300">{project.id.replace(/-/g, '_')}</span> ={' '}
                <span className="text-purple-400">new</span>{' '}
                <span className="text-yellow-300">Service</span>();
              </div>
              <div className="pl-4 text-zinc-500">
                // Stack: {project.technologies.slice(0, 3).join(', ')}
              </div>
              <div className="pl-4">
                <span className="text-zinc-500">db.connected</span> ={' '}
                <span className="text-emerald-400">true</span>;
              </div>
              <div>
                <span className="text-blue-300">{project.id.replace(/-/g, '_')}</span>
                .<span className="text-cyan-400">listen</span>(PORT);
              </div>
            </div>

            {/* Architecture specs pill strip */}
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-3 text-[11px] text-zinc-400">
              <span className="flex items-center gap-1">
                <Server className="w-3 h-3 text-emerald-400" />
                MVC
              </span>
              <span className="flex items-center gap-1">
                <Layers className="w-3 h-3 text-cyan-400" />
                CRUD
              </span>
              <span className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-indigo-400" />
                REST
              </span>
            </div>
          </div>
        </div>

        {/* Project Header Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="emerald" size="sm">
              {project.badge}
            </Badge>
            <Link
              to={`/projects/${project.id}`}
              className="text-xs font-mono text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <span>View Details</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Features Checklist */}
        <div className="space-y-2 mb-8">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Key Features:
          </h4>
          <ul className="space-y-1.5">
            {project.features.slice(0, 5).map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                <Check
                  className="w-3.5 h-3.5 mt-0.5 shrink-0"
                  style={{ color: project.accentColor }}
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.liveUrl ? (
            <Button
              href={project.liveUrl}
              target="_blank"
              variant="default"
              size="sm"
              icon={ExternalLink}
            >
              Live Demo
            </Button>
          ) : (
            <Button variant="secondary" size="sm" disabled>
              Deployment Pending
            </Button>
          )}

          {project.githubUrl ? (
            <Button
              href={project.githubUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={GithubIcon}
            >
              GitHub
            </Button>
          ) : (
            <Button
              onClick={handleCopyPlaceholder}
              variant="outline"
              size="sm"
              icon={GithubIcon}
              title="Repository link will be provided once public"
            >
              {copied ? 'Repo Coming Soon' : 'GitHub'}
            </Button>
          )}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <span>Deep Dive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}
