import { cn } from '@/lib/utils'

interface BadgeProps {
    children: React.ReactNode
    className?: string
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gold' | 'purple' | 'pink'
}

export function Badge({
    children,
    className = '',
    variant = 'primary'
}: BadgeProps) {
    const variants = {
        primary: 'bg-primary-500/20 text-primary-300 border border-primary-500/30 shadow-lg shadow-primary-500/10',
        secondary: 'bg-white/5 text-white/60 border border-white/10 backdrop-blur-sm',
        success: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/10',
        warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 shadow-lg shadow-yellow-500/10',
        error: 'bg-red-500/20 text-red-300 border border-red-500/30 shadow-lg shadow-red-500/10',
        gold: 'bg-accent-gold/20 text-accent-gold border border-accent-gold/30 shadow-lg shadow-accent-gold/10',
        purple: 'bg-accent-purple/20 text-accent-purple/90 border border-accent-purple/30 shadow-lg shadow-accent-purple/10',
        pink: 'bg-accent-pink/20 text-accent-pink/90 border border-accent-pink/30 shadow-lg shadow-accent-pink/10',
    }

    return (
        <span className={cn(
            'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-sm transition-all duration-300 hover:scale-105',
            variants[variant],
            className
        )}>
            {children}
        </span>
    )
}