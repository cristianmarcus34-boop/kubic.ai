'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    className?: string
    title?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Modal({
    isOpen,
    onClose,
    children,
    className = '',
    title,
    size = 'md'
}: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    const sizes = {
        sm: 'max-w-sm',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-6xl',
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#0a0a1a]/80 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={cn(
                'relative bg-[#0a0a1a]/95 backdrop-blur-sm rounded-2xl p-6 w-full mx-4 shadow-2xl shadow-primary-500/10 border border-primary-500/20 z-10 max-h-[90vh] overflow-y-auto',
                sizes[size],
                className
            )}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white hover:rotate-90 transition-all duration-300"
                    aria-label="Cerrar"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Title */}
                {title && (
                    <h2 className="text-2xl font-bold text-white mb-4 pr-8">
                        {title}
                    </h2>
                )}

                {children}
            </div>
        </div>
    )
}