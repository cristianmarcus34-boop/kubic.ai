'use client'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient' | 'ghost' | 'glow'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30',
    secondary: 'bg-[#0a0a1a] text-white border-2 border-accent-purple/50 hover:bg-gradient-to-r hover:from-accent-purple/20 hover:to-accent-pink/20 hover:border-accent-purple/80',
    outline: 'bg-transparent text-white border-2 border-white/30 hover:bg-white hover:text-[#0a0a1a] hover:border-white',
    ghost: 'bg-transparent text-white/70 hover:text-white hover:bg-white/5',
    gradient: 'bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink text-white hover:shadow-2xl hover:shadow-primary-500/30 border border-primary-400/30',
    glow: 'bg-gradient-to-r from-accent-gold to-accent-pink text-[#0a0a1a] font-bold hover:shadow-2xl hover:shadow-accent-gold/30 border border-accent-gold/30',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-[#0a0a1a] disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}