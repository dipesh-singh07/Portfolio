import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { education } from '../../data/education';
import { GraduationCap, Calendar } from 'lucide-react';

/**
 * Education section — data-driven from src/data/education.js
 * Automatically hidden when the education array is empty.
 */
export default function Education() {
  // Section is hidden when no data is provided
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Academic Background"
            title="Education"
            subtitle="My formal academic background and coursework."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.id} delay={index * 0.1}>
              <div className="h-full rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-zinc-800">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_18px_rgba(16,185,129,0.25)] transition-all duration-300">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
                      {edu.degree}{edu.field ? ` — ${edu.field}` : ''}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400 font-mono mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>
                    {edu.startYear}
                    {edu.endYear ? ` — ${edu.endYear}` : ' — Present'}
                  </span>
                  {edu.grade && (
                    <span className="ml-auto px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px]">
                      {edu.grade}
                    </span>
                  )}
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
