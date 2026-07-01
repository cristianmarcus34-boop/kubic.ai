'use client'

import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
}

export function Input({
    label,
    error,
    icon,
    iconPosition = 'left',
    className = '',
    id,
    ...props
}: InputProps) {
    return (
        <div className="space-y-2">
            {label && (
                <label
                    htmlFor={id}
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && iconPosition === 'left' && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                        {icon}
                    </div>
                )}
                <input
                    id={id}
                    className={cn(
                        'w-full px-4 py-3 rounded-xl bg-[#0a0a1a]/80 border border-primary-500/20 text-white placeholder:text-white/30 outline-none transition-all duration-300',
                        'focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10',
                        'hover:border-primary-500/30',
                        icon && iconPosition === 'left' && 'pl-10',
                        icon && iconPosition === 'right' && 'pr-10',
                        error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20 hover:border-red-500/50',
                        className
                    )}
                    {...props}
                />
                {icon && iconPosition === 'right' && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                        {icon}
                    </div>
                )}
                {error && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                )}
            </div>
            {error && (
                <p className="text-sm text-red-400 flex items-center gap-1.5">
                    <span className="text-red-400">•</span>
                    {error}
                </p>
            )}
        </div>
    )
}