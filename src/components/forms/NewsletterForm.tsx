'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

// ✅ CONFIGURACIÓN DE EMAILJS
const SERVICE_ID = 'service_zedpipm'
const TEMPLATE_ID = 'template_jpn7p0f' // 👈 Template para el usuario
const PUBLIC_KEY = 'mixYNTlMjvGfrF2ch'

interface NewsletterFormProps {
    className?: string
    variant?: 'default' | 'footer' | 'inline'
    placeholder?: string
}

export function NewsletterForm({
    className = '',
    variant = 'default',
    placeholder = 'Tu email'
}: NewsletterFormProps) {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus('idle')

        try {
            // Enviar email de bienvenida al usuario
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current!,
                PUBLIC_KEY
            )

            if (result.status === 200) {
                setStatus('success')
                setEmail('')
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                throw new Error('Error al suscribirte')
            }
        } catch (error) {
            console.error('Error:', error)
            setStatus('error')
            setErrorMessage('Error al suscribirte. Intenta nuevamente.')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Variante para el Footer
    if (variant === 'footer') {
        return (
            <form ref={formRef} onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        required
                        className="flex-1"
                    />
                    <Button
                        type="submit"
                        variant="gradient"
                        size="md"
                        disabled={isSubmitting}
                        className="whitespace-nowrap"
                    >
                        {isSubmitting ? '...' : 'Suscribirme'}
                    </Button>
                </div>

                <AnimatePresence>
                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-emerald-400 text-sm"
                        >
                            ✅ ¡Suscripción exitosa! Revisa tu email.
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-red-400 text-sm"
                        >
                            ❌ {errorMessage}
                        </motion.p>
                    )}
                </AnimatePresence>
            </form>
        )
    }

    // Variante por defecto
    return (
        <div className={`relative ${className}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        required
                        className="w-full pr-24"
                    />
                    <Button
                        type="submit"
                        variant="gradient"
                        size="sm"
                        disabled={isSubmitting}
                        className="absolute right-1 top-1 h-[calc(100%-8px)] px-4 whitespace-nowrap"
                    >
                        {isSubmitting ? '...' : 'Suscribirme'}
                    </Button>
                </div>
            </form>

            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 mt-3 p-3 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-500/30"
                    >
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">¡Te has suscrito exitosamente! Revisa tu email.</span>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 mt-3 p-3 bg-red-500/20 text-red-300 rounded-xl border border-red-500/30"
                    >
                        <AlertCircle className="w-5 h-5" />
                        <span className="text-sm">{errorMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}