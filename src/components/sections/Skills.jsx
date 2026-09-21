import React, { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { coreSkillCategories } from '../../data/skills';
import { Server, Layout, KeyRound, Wrench, CheckCircle2, ArrowRight, PencilLine } from 'lucide-react';

const categoryIcons = {
  core: Server,
  frontend: Layout,
  authentication: KeyRound,
  tools: Wrench,
};

const STORAGE_KEY = 'portfolio-skills';

export default function Skills() {
  const [categories, setCategories] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : coreSkillCategories;
    } catch {
      return coreSkillCategories;
    }
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
    } catch {
      // Ignore localStorage write failures in restricted environments.
    }
  }, [categories]);

  const updateCategory = (categoryId, field, value) => {
    setCategories((prev) =>
      prev.map((category) =>
        category.id === categoryId ? { ...category, [field]: value } : category
      )
    );
  };

  const updateSkill = (categoryId, skillIndex, field, value) => {
    setCategories((prev) =>
      prev.map((category) => {
        if (category.id !== categoryId) return category;

        return {
          ...category,
          skills: category.skills.map((skill, index) =>
            index === skillIndex ? { ...skill, [field]: value } : skill
          ),
        };
      })
    );
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex-1">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Technical Stack"
                title="Skills & Technologies"
                subtitle="My active, production-ready stack for engineering backend services and responsive full-stack applications. No fake percentage bars."
              />
            </ScrollReveal>
          </div>
          <button
            type="button"
            onClick={() => setIsEditing((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-emerald-500/40 hover:text-emerald-300"
          >
            <PencilLine className="w-3.5 h-3.5" />
            {isEditing ? 'Done' : 'Edit'}
          </button>
        </div>

        {!isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category.id] || Server;
              const isEmerald = category.accent === 'emerald';
              const isCyan = category.accent === 'cyan';
              const isIndigo = category.accent === 'indigo';

              return (
                <ScrollReveal key={category.id} delay={index * 0.08}>
                  <div className="h-full rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-black/30 group">
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
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category.id] || Server;
              const isEmerald = category.accent === 'emerald';
              const isCyan = category.accent === 'cyan';
              const isIndigo = category.accent === 'indigo';

              return (
                <div
                  key={category.id}
                  className="h-full rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-7 backdrop-blur-md"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                        isEmerald
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                          : isCyan
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25'
                          : isIndigo
                          ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/25'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <input
                        value={category.title}
                        onChange={(e) => updateCategory(category.id, 'title', e.target.value)}
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm font-semibold text-white outline-none focus:border-emerald-500"
                      />
                      <textarea
                        value={category.description}
                        onChange={(e) => updateCategory(category.id, 'description', e.target.value)}
                        rows={2}
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={`${category.id}-${skill.name}-${skillIndex}`}
                        className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 space-y-2"
                      >
                        <input
                          value={skill.name}
                          onChange={(e) => updateSkill(category.id, skillIndex, 'name', e.target.value)}
                          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1.5 text-xs font-semibold text-white outline-none focus:border-emerald-500"
                        />
                        <textarea
                          value={skill.highlight}
                          onChange={(e) => updateSkill(category.id, skillIndex, 'highlight', e.target.value)}
                          rows={2}
                          className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1.5 text-[11px] text-zinc-300 outline-none focus:border-emerald-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

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
