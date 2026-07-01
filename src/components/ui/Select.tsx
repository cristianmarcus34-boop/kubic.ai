'use client'

import { cn } from '@/lib/utils'
import { ChevronDown, AlertCircle } from 'lucide-react'

interface Option {
    value: string
    label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[]
    label?: string
    error?: string
    placeholder?: string
}

export function Select({
    options,
    label,
    error,
    placeholder,
    className = '',
    id,
    ...props
}: SelectProps) {
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
                <select
                    id={id}
                    className={cn(
                        'w-full px-4 py-3 rounded-xl bg-[#0a0a1a]/80 border border-primary-500/20 text-white outline-none transition-all duration-300 appearance-none',
                        'focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 focus:shadow-lg focus:shadow-primary-500/10',
                        'hover:border-primary-500/30',
                        'disabled:opacity-50 disabled:cursor-not-allowed',
                        error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20 hover:border-red-500/50',
                        className
                    )}
                    {...props}
                >
                    {placeholder && (
                        <option value="" className="text-white/40 bg-[#0a0a1a]">
                            {placeholder}
                        </option>
                    )}
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            className="bg-[#0a0a1a] text-white"
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                {/* Icono de flecha */}
                <ChevronDown className={cn(
                    'absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300',
                    error ? 'text-red-400' : 'text-white/40 group-hover:text-white/60'
                )} />

                {/* Icono de error */}
                {error && (
                    <AlertCircle className="absolute right-10 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
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