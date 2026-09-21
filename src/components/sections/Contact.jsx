import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../effects/ScrollReveal';
import Button from '../ui/Button';
import { Mail, Send, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { socialLinks } from '../../data/socialLinks';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Direct Inquiry"
            title="Let's Connect"
            subtitle="Have a project, opportunity, or just want to connect? Send a note or reach out through my direct links."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links (5 cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Available for full-time backend and full-stack engineering roles, freelance builds, and technical discussions.
                </p>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-zinc-400 block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                      {socialLinks.email}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700/60 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub Link */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-700/60 flex items-center justify-center shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">GitHub Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      github.com/dipesh-singh07
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors shrink-0" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/dipesh-singh-26b77936a
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors shrink-0" />
              </a>

              {/* Availability Note */}
              <div className="p-3.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center gap-2.5 text-xs text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Immediate availability for Full-Stack / Backend roles.</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form (7 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                    Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. I will review your note and get back to you shortly at <code className="text-emerald-400">{formData.email}</code>.
                  </p>
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
                    <p className="text-xs text-zinc-400">
                      Direct form for interview invitations, project scopes, or quick questions.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-zinc-300">
                      Your Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 text-sm text-white placeholder-zinc-500 transition-colors outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-zinc-300">
                      Your Email <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 text-sm text-white placeholder-zinc-500 transition-colors outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-zinc-300">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Discuss an opportunity, team role, or software inquiry..."
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 text-sm text-white placeholder-zinc-500 transition-colors outline-none font-sans resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full justify-center"
                    icon={Send}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
