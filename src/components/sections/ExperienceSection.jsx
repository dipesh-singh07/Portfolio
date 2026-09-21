import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import Badge from '../ui/Badge';
import { experience } from '../../data/experience';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

/**
 * Experience section — data-driven from src/data/experience.js
 * Automatically hidden when the experience array is empty.
 */
export default function ExperienceSection() {
  // Section is hidden when no data is provided
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Work History"
            title="Experience"
            subtitle="Professional roles, internships, and practical work experience."
          />
        </ScrollReveal>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ScrollReveal key={exp.id} delay={index * 0.1}>
              <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.25)] transition-all duration-300">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>
                          {exp.startDate} — {exp.endDate || 'Present'}
                        </span>
                      </div>
                    </div>

                    {/* Company + Location */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-cyan-400 font-mono">
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-xs text-zinc-500">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {exp.description && (
                      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    )}

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
