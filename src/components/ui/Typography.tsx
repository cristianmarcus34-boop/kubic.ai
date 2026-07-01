import { cn } from '@/lib/utils'

interface HeadingProps {
    children: React.ReactNode
    className?: string
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    variant?: 'default' | 'gradient' | 'gold'
}

export function Heading({
    children,
    className = '',
    as: Component = 'h2',
    variant = 'default'
}: HeadingProps) {
    const styles = {
        h1: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display',
        h2: 'text-3xl sm:text-4xl lg:text-5xl font-bold font-display',
        h3: 'text-2xl sm:text-3xl lg:text-4xl font-bold font-display',
        h4: 'text-xl sm:text-2xl lg:text-3xl font-bold font-display',
        h5: 'text-lg sm:text-xl lg:text-2xl font-bold font-display',
        h6: 'text-base sm:text-lg lg:text-xl font-bold font-display',
    }

    const variants = {
        default: 'text-white',
        gradient: 'text-transparent bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink bg-clip-text',
        gold: 'text-transparent bg-gradient-to-r from-accent-gold to-accent-pink bg-clip-text',
    }

    return (
        <Component className={cn(
            styles[Component],
            variants[variant],
            className
        )}>
            {children}
        </Component>
    )
}

interface ParagraphProps {
    children: React.ReactNode
    className?: string
    size?: 'sm' | 'base' | 'lg' | 'xl'
    variant?: 'default' | 'muted' | 'light' | 'white'
}

export function Paragraph({
    children,
    className = '',
    size = 'base',
    variant = 'default'
}: ParagraphProps) {
    const sizes = {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    }

    const variants = {
        default: 'text-white/80',
        muted: 'text-white/60',
        light: 'text-white/40',
        white: 'text-white',
    }

    return (
        <p className={cn(
            'leading-relaxed',
            sizes[size],
            variants[variant],
            className
        )}>
            {children}
        </p>
    )
}

interface TextProps {
    children: React.ReactNode
    className?: string
    variant?: 'primary' | 'secondary' | 'muted' | 'white' | 'gold' | 'purple' | 'pink' | 'gradient'
}

export function Text({
    children,
    className = '',
    variant = 'muted'
}: TextProps) {
    const variants = {
        primary: 'text-primary-400',
        secondary: 'text-white/70',
        muted: 'text-white/50',
        white: 'text-white',
        gold: 'text-accent-gold',
        purple: 'text-accent-purple',
        pink: 'text-accent-pink',
        gradient: 'text-transparent bg-gradient-to-r from-primary-500 via-accent-purple to-accent-pink bg-clip-text',
    }

    return (
        <span className={cn(
            variants[variant],
            className
        )}>
            {children}
        </span>
    )
}