import { cn } from '@/lib/utils'

interface DividerProps {
    className?: string
    orientation?: 'horizontal' | 'vertical'
    variant?: 'default' | 'gradient' | 'glow'
}

export function Divider({
    className = '',
    orientation = 'horizontal',
    variant = 'default'
}: DividerProps) {
    const orientations = {
        horizontal: 'w-full h-px my-8',
        vertical: 'h-full w-px mx-8',
    }

    const variants = {
        default: 'bg-white/10',
        gradient: 'bg-gradient-to-r from-transparent via-primary-500/50 to-transparent',
        glow: 'bg-gradient-to-r from-transparent via-accent-gold/50 via-accent-purple/50 via-accent-pink/50 to-transparent shadow-lg shadow-primary-500/20',
    }

    return (
        <div className={cn(
            variants[variant],
            orientations[orientation],
            className
        )} />
    )
}