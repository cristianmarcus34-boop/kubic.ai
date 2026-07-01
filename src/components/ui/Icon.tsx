import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface IconProps {
    icon: LucideIcon
    className?: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    variant?: 'default' | 'primary' | 'gradient' | 'gold' | 'purple' | 'pink'
    withBackground?: boolean
}

export function Icon({
    icon: IconComponent,
    className = '',
    size = 'md',
    variant = 'default',
    withBackground = false
}: IconProps) {
    const sizes = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8',
        '2xl': 'w-10 h-10',
    }

    const variants = {
        default: 'text-white/60',
        primary: 'text-primary-400',
        gradient: 'text-transparent bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink bg-clip-text',
        gold: 'text-accent-gold',
        purple: 'text-accent-purple',
        pink: 'text-accent-pink',
    }

    const backgrounds = {
        default: '',
        primary: 'bg-primary-500/20 p-2 rounded-xl',
        gradient: 'bg-gradient-to-r from-primary-500/20 via-accent-purple/20 to-accent-pink/20 p-2 rounded-xl',
        gold: 'bg-accent-gold/20 p-2 rounded-xl',
        purple: 'bg-accent-purple/20 p-2 rounded-xl',
        pink: 'bg-accent-pink/20 p-2 rounded-xl',
    }

    return (
        <div className={cn(
            'inline-flex items-center justify-center transition-all duration-300',
            sizes[size],
            withBackground ? backgrounds[variant] : '',
            className
        )}>
            <IconComponent className={cn(
                sizes[size],
                variants[variant],
                withBackground ? 'relative z-10' : ''
            )} />
        </div>
    )
}