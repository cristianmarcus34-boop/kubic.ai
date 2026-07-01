'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, User, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

// ✅ CONFIGURACIÓN DE EMAILJS - ¡TUS DATOS!
const SERVICE_ID = 'service_zedpipm'
const TEMPLATE_ID = 'template_gerk6up' // 👈 CAMBIAR POR EL TEMPLATE DE RESERVAS
const PUBLIC_KEY = 'mixYNTlMjvGfrF2ch'

interface ReservationFormProps {
    className?: string
    onSuccess?: () => void
}

const espacioOptions = [
    { value: '', label: 'Selecciona un espacio' },
    { value: 'almacenamiento', label: 'Almacenamiento Inteligente' },
    { value: 'streaming', label: 'Estudio de Streaming' },
    { value: 'oficina', label: 'Oficina Cápsula' },
]

export function ReservationForm({ className = '', onSuccess }: ReservationFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        espacio: '',
        fecha: '',
        hora: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const formRef = useRef<HTMLFormElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                setFormData({ name: '', email: '', phone: '', espacio: '', fecha: '', hora: '' })
                if (onSuccess) onSuccess()
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                throw new Error('Error al procesar la reserva')
            }
        } catch (error) {
            console.error('Error:', error)
            setStatus('error')
            setErrorMessage('Hubo un error al procesar la reserva. Intenta nuevamente.')
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    icon={<User className="w-4 h-4" />}
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    icon={<Mail className="w-4 h-4" />}
                />
            </div>

            <Input
                label="Teléfono"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+54 11 1234-5678"
                icon={<Phone className="w-4 h-4" />}
            />

            <div>
                <label className="block text-sm font-medium text-white/70 mb-1">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Tipo de espacio *
                </label>
                <select
                    name="espacio"
                    value={formData.espacio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a1a]/80 border border-primary-500/20 text-white outline-none transition-all duration-300 focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 hover:border-primary-500/30 appearance-none"
                >
                    {espacioOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-[#0a0a1a] text-white">
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                <Input
                    label="Fecha"
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                    icon={<Calendar className="w-4 h-4" />}
                />
                <Input
                    label="Hora"
                    type="time"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                    icon={<Clock className="w-4 h-4" />}
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
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">¡Reserva enviada con éxito! Te contactaremos pronto.</span>
                    </motion.div>
                )}

                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 p-3 bg-red-500/20 text-red-300 rounded-xl border border-red-500/30"
                    >
                        <AlertCircle className="w-5 h-5" />
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
                        Procesando reserva...
                    </>
                ) : (
                    <>
                        Reservar ahora
                        <Send className="w-4 h-4 ml-2" />
                    </>
                )}
            </Button>
        </form>
    )
}