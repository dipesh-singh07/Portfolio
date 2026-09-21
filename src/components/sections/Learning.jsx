import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { currentlyLearningSkills } from '../../data/skills';
import { AlertCircle, Clock, BookOpen } from 'lucide-react';
import Badge from '../ui/Badge';

export default function Learning() {
  return (
    <section id="learning" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Continuous Evolution"
            title="Currently Learning"
            subtitle="Areas of ongoing study and self-directed curriculum to broaden my backend systems engineering and database capabilities."
          />
        </ScrollReveal>

        {/* Clear Recruiter Disclaimer */}
        <ScrollReveal delay={0.08} className="mb-10">
          <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/80 border border-cyan-500/30 backdrop-blur-md flex items-start gap-3.5 shadow-lg">
            <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                Transparency Notice for Recruiters
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The subjects below represent active study topics, practice problems, and architectural exploration. They are <strong>not</strong> claimed as technologies I have production-level mastery of. My verified production stack is documented in the Skills section.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentlyLearningSkills.map((item, index) => (
            <ScrollReveal key={item.topic} delay={index * 0.05} className="h-full">
              <div className="h-full rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 p-5 backdrop-blur-md transition-all duration-300 hover:shadow-lg flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-zinc-400">
                      {item.category}
                    </span>
                    <Badge
                      variant={
                        item.status === 'In Progress'
                          ? 'emerald'
                          : item.status === 'Ongoing Practice'
                          ? 'cyan'
                          : 'amber'
                      }
                      size="sm"
                    >
                      <Clock className="w-2.5 h-2.5 mr-1 inline" />
                      {item.status}
                    </Badge>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    <span className="text-xs font-mono text-zinc-400 mr-1.5">0{index + 1}.</span>
                    {item.topic}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {item.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-cyan-400" /> Study Track
                  </span>
                  <span className="text-zinc-400">Self-Directed</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
