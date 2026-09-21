import React from 'react';
import { cn } from '../../lib/utils';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={cn('flex flex-col mb-12 sm:mb-16', alignClass, className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-zinc-800/80 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-6 flex items-center gap-2">
        <div className="h-[2px] w-12 bg-emerald-500/80 rounded-full" />
        <div className="h-[2px] w-4 bg-emerald-500/40 rounded-full" />
      </div>
    </div>
  );
}
