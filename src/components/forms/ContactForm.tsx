'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

// ✅ CONFIGURACIÓN DE EMAILJS - ¡TUS DATOS!
const SERVICE_ID = 'service_zedpipm'
const TEMPLATE_ID = 'template_gerk6up'
const PUBLIC_KEY = 'mixYNTlMjvGfrF2ch'

interface ContactFormProps {
    className?: string
    onSuccess?: () => void
}

export function ContactForm({ className = '', onSuccess }: ContactFormProps) {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const formRef = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus('idle')

        try {
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current!,
                PUBLIC_KEY
            )

            if (result.status === 200) {
                setStatus('success')
                setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
                if (onSuccess) onSuccess()
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                throw new Error('Error al enviar el mensaje')
            }
        } catch (error) {
            console.error('Error:', error)
            setStatus('error')
            setErrorMessage('Hubo un error al enviar el mensaje. Intenta nuevamente.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            <div className="grid sm:grid-cols-2 gap-4">
                <Input
                    label="Nombre completo"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                />
            </div>

            <Input
                label="Teléfono"
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="+54 11 1234-5678"
            />

            <div>
                <label className="block text-sm font-medium text-white/70 mb-1">
                    Mensaje *
                </label>
                <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a1a]/80 border border-primary-500/20 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 hover:border-primary-500/30 resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                />
            </div>

            <AnimatePresence>
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 p-3 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-500/30"
                    >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">¡Mensaje enviado con éxito! Te contactaremos pronto.</span>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 p-3 bg-red-500/20 text-red-300 rounded-xl border border-red-500/30"
                    >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{errorMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <span className="animate-spin mr-2">⟳</span>
                        Enviando...
                    </>
                ) : (
                    <>
                        Enviar mensaje
                        <Send className="w-4 h-4 ml-2" />
                    </>
                )}
            </Button>
        </form>
    )
}