import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SectionProps {
    children: React.ReactNode
    className?: string
    containerClassName?: string
    id?: string
    background?: 'dark' | 'darker' | 'gradient' | 'gradient-glow' | 'primary'
}

export function Section({
    children,
    className = '',
    containerClassName = '',
    id,
    background = 'dark'
}: SectionProps) {
    const backgrounds = {
        dark: 'bg-[#0a0a1a]',
        darker: 'bg-[#050510]',
        gradient: 'bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]',
        'gradient-glow': 'bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] via-[#0a1a3e] to-[#0a0a1a]',
        primary: 'bg-gradient-to-br from-primary-600 via-primary-700 to-accent-purple text-white',
    }

    return (
        <section
            id={id}
            className={cn(
                'py-16 sm:py-20 lg:py-28 relative overflow-hidden',
                backgrounds[background],
                className
            )}
        >
            {/* Líneas decorativas sutiles */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

            <Container className={containerClassName}>
                {children}
            </Container>
        </section>
    )
}