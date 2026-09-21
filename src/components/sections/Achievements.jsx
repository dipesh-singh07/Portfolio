import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { achievements } from '../../data/achievements';
import { Trophy, Calendar, ExternalLink } from 'lucide-react';

/**
 * Achievements section — data-driven from src/data/achievements.js
 * Automatically hidden when the achievements array is empty.
 */
export default function Achievements() {
  // Section is hidden when no data is provided
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Recognition & Awards"
            title="Achievements"
            subtitle="Hackathons, awards, and recognitions earned along the way."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="h-full rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group flex flex-col justify-between">
                <div>
                  {/* Icon + Date row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/25 flex items-center justify-center group-hover:shadow-[0_0_18px_rgba(245,158,11,0.25)] transition-all duration-300">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1 leading-snug">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-xs font-mono text-amber-400 mb-3">
                    {item.organization}
                  </p>

                  {/* Description */}
                  {item.description && (
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* External Link */}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
