import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { certifications } from '../../data/certifications';
import { Award, Calendar, ExternalLink } from 'lucide-react';

/**
 * Certifications section — data-driven from src/data/certifications.js
 * Automatically hidden when the certifications array is empty.
 */
export default function Certifications() {
  // Section is hidden when no data is provided
  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Verified Credentials"
            title="Certifications"
            subtitle="Industry-recognized certifications and verified technical credentials."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.id} delay={index * 0.08}>
              <div className="h-full rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group flex flex-col justify-between">
                <div>
                  {/* Icon + Date */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 flex items-center justify-center group-hover:shadow-[0_0_18px_rgba(99,102,241,0.25)] transition-all duration-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors mb-1 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-xs font-mono text-indigo-400 mb-3">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Verify Credential</span>
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
