'use client'

import { motion } from 'framer-motion'
import { Smartphone, QrCode, CheckCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const steps = [
    {
        icon: Smartphone,
        title: '1. Reserva desde tu app',
        description: 'Selecciona el espacio, horario y duración en segundos. Sin papeleo, sin filas.'
    },
    {
        icon: QrCode,
        title: '2. Accede con QR o código',
        description: 'Llega al espacio, escanea tu QR o ingresa tu código. El acceso es inmediato.'
    },
    {
        icon: CheckCircle,
        title: '3. Espacio listo para usar',
        description: 'El espacio se prepara automáticamente: luz, temperatura y equipamiento activado.'
    }
]

export function HowItWorks() {
    return (
        <section id="como-funciona" className="relative py-24 overflow-hidden bg-[#0a0a1a]">
            {/* Fondo con gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a2a] to-[#0a0a1a]" />

            {/* Efectos decorativos */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                {/* Líneas decorativas */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-primary-400 font-semibold text-sm uppercase tracking-wider"
                    >
                        ✦ Simple y Rápido
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold font-display mt-2 text-white"
                    >
                        Cómo funciona <span className="text-gradient">kubic.ai</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-white/60 text-lg"
                    >
                        Tres pasos simples para empezar a usar tu espacio inteligente.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Línea conectora con colores vibrantes */}
                    <div className="hidden md:block absolute top-1/2 left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-primary-500/50 via-accent-purple/50 to-accent-pink/50 -translate-y-1/2" />

                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative text-center"
                            >
                                <div className="relative z-10">
                                    {/* Círculo con gradiente y efectos */}
                                    <div className="relative w-24 h-24 mx-auto mb-6">
                                        {/* Anillo decorativo */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-purple to-accent-pink animate-pulse opacity-30 blur-sm" />

                                        {/* Círculo principal */}
                                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center shadow-2xl shadow-primary-500/20 border border-primary-400/30">
                                            {/* Fondo semitransparente para contraste */}
                                            <div className="absolute inset-1.5 rounded-full bg-white/5 backdrop-blur-sm" />

                                            {/* Número del paso */}
                                            <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent-gold text-[#0a0a1a] text-xs font-bold flex items-center justify-center shadow-lg shadow-accent-gold/30 border border-accent-gold/50">
                                                {index + 1}
                                            </span>

                                            {/* Ícono */}
                                            <Icon className="w-10 h-10 text-white/90 relative z-10" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 max-w-sm mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}