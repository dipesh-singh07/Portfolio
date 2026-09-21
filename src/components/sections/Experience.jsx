import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { GraduationCap, Briefcase, Trophy, Award, Calendar, Edit3 } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'education',
    title: 'Education',
    icon: GraduationCap,
    accent: 'emerald',
    entries: [
      {
        title: '[Add your education details]',
        institution: '[Institution / University / Degree]',
        date: '[Year - Year]',
        description:
          '[Add coursework, degree specialization, or academic background details.]',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    icon: Briefcase,
    accent: 'cyan',
    entries: [
      {
        title: '[Add internship/experience details]',
        institution: '[Organization / Company / Role]',
        date: '[Date Range]',
        description:
          '[Add core technical responsibilities, backend endpoints built, databases optimized, or feature delivery.]',
      },
    ],
  },
  {
    id: 'hackathons',
    title: 'Hackathons',
    icon: Trophy,
    accent: 'amber',
    entries: [
      {
        title: '[Add hackathon details]',
        institution: '[Event / Platform / Organizing Body]',
        date: '[Event Date]',
        description:
          '[Add project developed under sprint conditions, technologies deployed, and problem addressed.]',
      },
    ],
  },
  {
    id: 'achievements',
    title: 'Achievements',
    icon: Award,
    accent: 'indigo',
    entries: [
      {
        title: '[Add achievements]',
        institution: '[Issuing Organization / Recognition]',
        date: '[Year]',
        description:
          '[Add academic recognition, competitive programming rating, or verified technical certification.]',
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Timeline & Milestones"
            title="Education & Experience"
            subtitle="Academic background and practical milestones. Structured with clean, easy-to-edit slots to update as accomplishments are verified."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isEmerald = cat.accent === 'emerald';
            const isCyan = cat.accent === 'cyan';
            const isAmber = cat.accent === 'amber';

            return (
              <ScrollReveal key={cat.id} delay={idx * 0.08}>
                <div className="h-full rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-7 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                          isEmerald
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                            : isCyan
                            ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25'
                            : isAmber
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/25'
                            : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                    </div>

                    {/* Timeline items */}
                    <div className="space-y-4">
                      {cat.entries.map((entry, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-zinc-950/70 border border-dashed border-zinc-700/80 space-y-2 group hover:border-zinc-500 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                              {entry.title}
                            </span>
                            <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1 shrink-0">
                              <Calendar className="w-3 h-3" />
                              {entry.date}
                            </span>
                          </div>

                          <span className="text-xs font-mono text-emerald-400 block">
                            {entry.institution}
                          </span>

                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {entry.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                    <Edit3 className="w-3 h-3 text-emerald-400" />
                    <span>Editable in: src/components/sections/Experience.jsx</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
