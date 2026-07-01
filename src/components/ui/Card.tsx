import { cn } from '@/lib/utils'

interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
    variant?: 'default' | 'glass' | 'gradient' | 'dark'
}

export function Card({
    children,
    className = '',
    hover = true,
    variant = 'default'
}: CardProps) {
    const variants = {
        default: 'bg-[#0a0a1a]/80 backdrop-blur-sm border border-primary-500/10',
        glass: 'bg-white/5 backdrop-blur-md border border-white/10',
        gradient: 'bg-gradient-to-br from-primary-500/10 via-accent-purple/10 to-accent-pink/10 border border-primary-500/20',
        dark: 'bg-[#0a0a1a] border border-primary-500/20',
    }

    return (
        <div className={cn(
            'rounded-2xl p-6 shadow-xl transition-all duration-300',
            variants[variant],
            hover && 'hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 hover:border-primary-500/30',
            className
        )}>
            {children}
        </div>
    )
}