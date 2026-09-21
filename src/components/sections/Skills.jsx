import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { coreSkillCategories } from '../../data/skills';
import { Server, Layout, KeyRound, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

const categoryIcons = {
  core: Server,
  frontend: Layout,
  authentication: KeyRound,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Technical Stack"
            title="Skills & Technologies"
            subtitle="My active, production-ready stack for engineering backend services and responsive full-stack applications. No fake percentage bars."
          />
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {coreSkillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] || Server;
            const isEmerald = category.accent === 'emerald';
            const isCyan = category.accent === 'cyan';
            const isIndigo = category.accent === 'indigo';

            return (
              <ScrollReveal key={category.id} delay={index * 0.08}>
                <div className="h-full rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group">
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isEmerald
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25 group-hover:shadow-[0_0_18px_rgba(16,185,129,0.25)]'
                          : isCyan
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.25)]'
                          : isIndigo
                          ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25 group-hover:shadow-[0_0_18px_rgba(99,102,241,0.25)]'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/25 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.25)]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud / Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-center gap-1 group/item"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isEmerald
                                ? 'text-emerald-400'
                                : isCyan
                                ? 'text-cyan-400'
                                : isIndigo
                                ? 'text-indigo-400'
                                : 'text-amber-400'
                            }`}
                          />
                          <span className="text-xs font-semibold text-zinc-200 group-hover/item:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-500 pl-5.5 leading-tight">
                          {skill.highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Explicit Separation Banner pointing to Currently Learning */}
        <ScrollReveal delay={0.2} className="mt-12">
          <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Core Stack vs. Learning
              </span>
              <p className="text-xs text-zinc-400">
                Technologies I am actively investigating (Python, PostgreSQL, Docker, System Design) are isolated in their own section.
              </p>
            </div>
            <a
              href="#learning"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
            >
              <span>View Currently Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
