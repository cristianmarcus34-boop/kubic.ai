'use client'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface DialogProps {
    children: React.ReactNode
    className?: string
    onClose?: () => void
    showClose?: boolean
}

export function Dialog({
    children,
    className = '',
    onClose,
    showClose = true
}: DialogProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a1a]/80 backdrop-blur-md">
            <div className={cn(
                'relative bg-[#0a0a1a]/95 backdrop-blur-sm rounded-2xl p-6 max-w-md w-full shadow-2xl shadow-primary-500/10 border border-primary-500/20',
                className
            )}>
                {showClose && onClose && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors duration-300 hover:rotate-90"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                )}
                {children}
            </div>
        </div>
    )
}

interface DialogHeaderProps {
    children: React.ReactNode
    className?: string
}

export function DialogHeader({ children, className = '' }: DialogHeaderProps) {
    return (
        <div className={cn(
            'text-xl font-bold text-white mb-4 pr-8',
            className
        )}>
            {children}
        </div>
    )
}

interface DialogBodyProps {
    children: React.ReactNode
    className?: string
}

export function DialogBody({ children, className = '' }: DialogBodyProps) {
    return (
        <div className={cn(
            'text-white/70 mb-4',
            className
        )}>
            {children}
        </div>
    )
}

interface DialogFooterProps {
    children: React.ReactNode
    className?: string
}

export function DialogFooter({ children, className = '' }: DialogFooterProps) {
    return (
        <div className={cn(
            'flex justify-end gap-3 mt-4 pt-4 border-t border-primary-500/10',
            className
        )}>
            {children}
        </div>
    )
}