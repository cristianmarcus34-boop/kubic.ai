'use client'

import { motion } from 'framer-motion'
import { Brain, Clock, Shield, Zap, Wifi, Camera } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const features = [
    {
        icon: Brain,
        title: 'IA Predictiva',
        description: 'Nuestra IA aprende tus hábitos para optimizar disponibilidad y recomendarte espacios.',
        color: 'from-primary-500 to-accent-purple'
    },
    {
        icon: Clock,
        title: '24/7 Disponibilidad',
        description: 'Accede a tu espacio cuando quieras, sin restricciones de horario.',
        color: 'from-accent-purple to-accent-pink'
    },
    {
        icon: Shield,
        title: 'Seguridad Avanzada',
        description: 'Sistema de acceso biométrico y cámaras de seguridad con IA.',
        color: 'from-accent-pink to-accent-gold'
    },
    {
        icon: Zap,
        title: 'Automatización Total',
        description: 'Todo el proceso es automático: reserva, acceso, facturación y gestión.',
        color: 'from-accent-gold to-primary-500'
    },
    {
        icon: Wifi,
        title: 'Conectividad Premium',
        description: 'Internet de alta velocidad en todos los espacios.',
        color: 'from-primary-500 to-accent-purple'
    },
    {
        icon: Camera,
        title: 'Monitoreo en Tiempo Real',
        description: 'Controla tu espacio desde la app con cámaras y sensores.',
        color: 'from-accent-purple to-accent-pink'
    }
]

export function Features() {
    return (
        <section id="caracteristicas" className="relative py-24 overflow-hidden bg-[#0a0a1a]">
            {/* Fondo con gradiente sutil */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />

            {/* Efectos decorativos */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-pink/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

                {/* Líneas decorativas */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
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
                        ✦ Tecnología de Punta
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold font-display mt-2 text-white"
                    >
                        Todo impulsado por <span className="text-gradient">IA</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-white/60 text-lg"
                    >
                        Tecnología avanzada que hace que tu experiencia sea simple, segura y eficiente.
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="relative h-full bg-[#0a0a1a]/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-500/20 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/40 overflow-hidden">
                                    {/* Fondo decorativo del gradiente */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                                    {/* Efecto de brillo en hover */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45 -translate-x-full group-hover:translate-x-full" />

                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}