'use client'

import { motion } from 'framer-motion'
import { Package, Mic, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

const services = [
    {
        icon: Package,
        title: 'Almacenamiento Inteligente',
        description: 'Lockers climatizados con acceso 24/7, control de inventario por IA y notificaciones en tiempo real.',
        features: ['Acceso biométrico', 'Control de temperatura', 'Inventario digital'],
        color: 'from-primary-500 to-accent-purple'
    },
    {
        icon: Mic,
        title: 'Estudios de Streaming',
        description: 'Espacios profesionales listos para usar con equipamiento completo para creadores de contenido.',
        features: ['Iluminación profesional', 'Audio de alta calidad', 'Fondo virtual IA'],
        color: 'from-accent-purple to-accent-pink'
    },
    {
        icon: Users,
        title: 'Oficinas Cápsula',
        description: 'Espacios de coworking privados, ergonómicos y equipados para máxima productividad.',
        features: ['Escritorio ergonómico', 'Monitor 4K', 'Silla ejecutiva'],
        color: 'from-accent-pink to-accent-gold'
    }
]

export function Services() {
    return (
        <section id="servicios" className="relative py-24 overflow-hidden bg-[#0a0a1a]">
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
                        ✦ Nuestros Espacios
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold font-display mt-2 text-white"
                    >
                        Tres formas de <span className="text-gradient">trabajar y crear</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 text-white/60 text-lg"
                    >
                        Espacios diseñados para potenciar tu creatividad y productividad,
                        todo gestionado con inteligencia artificial.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative h-full bg-[#0a0a1a]/80 backdrop-blur-sm rounded-3xl p-8 border border-primary-500/20 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-primary-500/40 group">
                                    {/* Fondo decorativo de la card */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-300`} />

                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/60 mb-4">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="text-sm text-white/50 flex items-center gap-2">
                                                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color}`} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
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