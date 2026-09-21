import React from 'react';
import { cn } from '../../lib/utils';

export default function Badge({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center font-mono font-medium rounded-md tracking-wide transition-colors border select-none';

  const variants = {
    default: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/80',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25',
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
    outline: 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2',
  };

  return (
    <span
      className={cn(baseStyles, variants[variant] || variants.default, sizes[size] || sizes.md, className)}
      {...props}
    >
      {children}
    </span>
  );
}
