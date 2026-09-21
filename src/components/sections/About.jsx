import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import { Server, Database, Code2, ShieldCheck, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Background"
            title="About Me"
            subtitle="Developer background centered on practical web applications, dependable REST APIs, and backend systems."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative Column (7 cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-md space-y-4">
              <p className="text-white text-lg sm:text-xl font-medium leading-snug">
                I'm a developer focused on building practical web applications and backend systems. I work primarily with <span className="text-emerald-400 font-semibold">JavaScript</span>, <span className="text-emerald-400 font-semibold">Node.js</span>, <span className="text-emerald-400 font-semibold">Express.js</span>, <span className="text-emerald-400 font-semibold">MongoDB</span> and <span className="text-cyan-400 font-semibold">React.js</span>.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base">
                I enjoy designing APIs, working with databases, implementing authentication and building complete application features.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">RESTful Architecture</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Clean controllers, middleware pipelines, and structured request routing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Data Modeling</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Mongoose schemas, relational references, validation, and index optimization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Authentication</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Stateless JWT validation and secure cookie-based session handling.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Information Card Column (5 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-5">
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-700/70 p-6 sm:p-7 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
                    Developer Spec
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Verified Stack
                </span>
              </div>

              {/* Required Information Metadata */}
              <div className="py-6 space-y-5">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Primary Focus
                  </span>
                  <div className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Backend Development
                  </div>
                  <span className="text-xs text-zinc-500">APIs, server infrastructure, and business logic</span>
                </div>

                <div className="h-px bg-zinc-800/80" />

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Core Stack
                  </span>
                  <div className="text-base sm:text-lg font-semibold text-emerald-300 font-mono flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-400" />
                    Node.js + Express.js + MongoDB
                  </div>
                  <span className="text-xs text-zinc-500">Fast asynchronous runtime & flexible document store</span>
                </div>

                <div className="h-px bg-zinc-800/80" />

                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Frontend
                  </span>
                  <div className="text-base sm:text-lg font-semibold text-cyan-300 font-mono flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    React.js
                  </div>
                  <span className="text-xs text-zinc-500">Component hierarchy, reactive state, and modern styling</span>
                </div>
              </div>

              {/* Terminal Code Snippet Footer */}
              <div className="pt-4 border-t border-zinc-800 font-mono text-xs text-zinc-400 bg-zinc-950/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
                <div className="flex items-center gap-2 text-zinc-500 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-[11px] text-zinc-400 ml-1">dipesh.config.json</span>
                </div>
                <div className="text-zinc-300">
                  <span className="text-emerald-400">"availableForHire"</span>: <span className="text-cyan-400">true</span>,
                  <br />
                  <span className="text-emerald-400">"preferredRole"</span>: <span className="text-amber-300">"Full-Stack / Backend Engineer"</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
