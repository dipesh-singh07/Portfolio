import React, { useState, useEffect } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { currentlyLearningSkills as initialLearningSkills } from '../../data/skills';
import { AlertCircle, Clock, BookOpen, PencilLine } from 'lucide-react';
import Badge from '../ui/Badge';

const STORAGE_KEY = 'portfolio-learning';

export default function Learning() {
  const [learningSkills, setLearningSkills] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialLearningSkills;
    } catch {
      return initialLearningSkills;
    }
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learningSkills));
    } catch {
      // Ignore localStorage write failures in restricted environments.
    }
  }, [learningSkills]);

  const updateLearningSkill = (index, field, value) => {
    setLearningSkills((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item
      )
    );
  };

  const addLearningSkill = () => {
    const newId = `learning-${Date.now()}-${Math.random().toString(16).slice(2)}`;

    setLearningSkills((prev) => [
      ...prev,
      {
        id: newId,
        topic: 'New Topic',
        category: 'Learning Path',
        status: 'In Progress',
        focus: 'Add a short description of what you are learning and why it matters.',
      },
    ]);
  };

  return (
    <section id="learning" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex-1">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Continuous Evolution"
                title="Currently Learning"
                subtitle="Areas of ongoing study and self-directed curriculum to broaden my backend systems engineering and database capabilities."
              />
            </ScrollReveal>
          </div>
          <button
            type="button"
            onClick={() => setIsEditing((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-200 transition hover:border-cyan-500/40 hover:text-cyan-300"
          >
            <PencilLine className="w-3.5 h-3.5" />
            {isEditing ? 'Done' : 'Edit'}
          </button>
        </div>

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

        {!isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningSkills.map((item, index) => (
              <ScrollReveal key={item.id || item.topic} delay={index * 0.05} className="h-full">
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
        ) : (
          <>
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={addLearningSkill}
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-300 transition hover:bg-cyan-500/15"
              >
                <PencilLine className="w-3.5 h-3.5" />
                Add Topic
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {learningSkills.map((item, index) => (
                <div key={item.id || `${item.topic}-${index}`} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 space-y-3">
                  <input
                    value={item.topic}
                    onChange={(e) => updateLearningSkill(index, 'topic', e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm font-bold text-white outline-none focus:border-cyan-500"
                  />
                  <input
                    value={item.category}
                    onChange={(e) => updateLearningSkill(index, 'category', e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-[11px] font-mono text-zinc-300 outline-none focus:border-cyan-500"
                  />
                  <input
                    value={item.status}
                    onChange={(e) => updateLearningSkill(index, 'status', e.target.value)}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-[11px] font-mono text-emerald-300 outline-none focus:border-cyan-500"
                  />
                  <textarea
                    value={item.focus}
                    onChange={(e) => updateLearningSkill(index, 'focus', e.target.value)}
                    rows={4}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 outline-none focus:border-cyan-500"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
