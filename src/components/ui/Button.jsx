import React from 'react';
import { cn } from '../../lib/utils';

export default function Button({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  disabled = false,
  href,
  onClick,
  type = 'button',
  target,
  rel,
  icon: Icon,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 rounded-lg cursor-pointer';

  const variants = {
    default:
      'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(16,185,129,0.45)] border border-emerald-400/30',
    outline:
      'border border-zinc-700 hover:border-zinc-500 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-200 hover:text-white backdrop-blur-md shadow-sm',
    secondary:
      'bg-zinc-800 hover:bg-zinc-700/80 text-zinc-200 hover:text-white border border-zinc-700/60',
    ghost:
      'bg-transparent hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-100',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const combinedClass = cn(baseStyles, variants[variant] || variants.default, sizes[size] || sizes.md, className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedClass}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        {...props}
      >
        {children}
        {Icon && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
