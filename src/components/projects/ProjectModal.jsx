import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Check } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 mb-6">
            <Badge variant="emerald" size="sm">
              {project.badge}
            </Badge>
            <h3 id="modal-project-title" className="text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Summary */}
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 mb-6 space-y-3 font-mono text-xs">
            <div className="text-zinc-400 flex items-center justify-between">
              <span className="text-emerald-400 font-semibold">// Architecture Summary</span>
              <span>{project.status}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300">
              <div>
                <span className="text-zinc-500">Pattern: </span>
                {project.architecture.pattern}
              </div>
              <div>
                <span className="text-zinc-500">Database: </span>
                {project.architecture.database}
              </div>
              <div>
                <span className="text-zinc-500">Auth: </span>
                {project.architecture.authStrategy}
              </div>
              <div>
                <span className="text-zinc-500">API Style: </span>
                {project.architecture.apiDesign}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-xs font-mono font-semibold uppercase text-zinc-400 mb-2">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <Badge key={t} variant="outline" size="sm">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-zinc-800">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                variant="default"
                size="sm"
                icon={ExternalLink}
              >
                Live Demo
              </Button>
            )}
            <Button onClick={onClose} variant="secondary" size="sm">
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
