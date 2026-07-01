import { cn } from '@/lib/utils'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode
    required?: boolean
    variant?: 'default' | 'light' | 'gradient'
}

export function Label({
    children,
    className = '',
    required = false,
    variant = 'default',
    ...props
}: LabelProps) {
    const variants = {
        default: 'text-white/70 hover:text-white',
        light: 'text-white/50 hover:text-white/70',
        gradient: 'text-transparent bg-gradient-to-r from-primary-400 via-accent-purple to-accent-pink bg-clip-text',
    }

    return (
        <label
            className={cn(
                'text-sm font-medium transition-colors duration-300',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
            {required && (
                <span className="text-accent-pink ml-1 font-bold">*</span>
            )}
        </label>
    )
}