'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Fondo con gradiente oscuro y colores vibrantes */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a3e]" />

            {/* Efectos decorativos flotantes con colores vibrantes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

                {/* Líneas decorativas */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Columna Izquierda - Texto */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-accent-purple/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/20 shadow-lg shadow-primary-500/10">
                            <Sparkles className="w-4 h-4 text-accent-gold" />
                            <span>✨ IA + PropTech 2026</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight text-white">
                            Micro-espacios <br />
                            <span className="text-gradient">inteligentes</span> <br />
                            con IA
                        </h1>

                        <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Alquila y gestiona espacios automatizados 24/7: almacenamiento,
                            estudios streaming y oficinas cápsula. Todo sin intervención humana.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button variant="gradient" size="lg" className="bg-gradient-to-r from-primary-500 to-accent-purple text-white hover:shadow-2xl hover:shadow-primary-500/30 border border-primary-400/30">
                                Reserva tu espacio
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="secondary" size="lg" className="border-2 border-accent-purple/50 text-white hover:bg-gradient-to-r hover:from-accent-purple/20 hover:to-accent-pink/20">
                                Ver servicios
                            </Button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
                            <div>
                                <div className="text-2xl font-bold text-primary-400">100+</div>
                                <div className="text-sm text-white/50">Espacios disponibles</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-accent-gold">99.9%</div>
                                <div className="text-sm text-white/50">Disponibilidad</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-accent-pink">4.9★</div>
                                <div className="text-sm text-white/50">Calificación</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Columna Derecha - Imagen */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Fondo decorativo rotado con gradiente vibrante */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-accent-purple to-accent-pink rounded-3xl rotate-3 animate-pulse shadow-2xl shadow-primary-500/20" />

                            {/* Contenedor de la imagen con fondo oscuro */}
                            <div className="absolute inset-0 bg-[#0a0a1a] rounded-3xl shadow-2xl p-2 overflow-hidden relative border border-primary-500/20">
                                <Image
                                    src="/images/hero-bg.png"
                                    alt="Espacios inteligentes kubic.ai"
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-scale-down rounded-2xl"
                                    priority
                                />
                            </div>

                            {/* Badges flotantes con estilo oscuro */}
                            <div className="absolute -top-4 -right-4 bg-[#0a0a1a] rounded-2xl shadow-2xl shadow-primary-500/20 p-3 flex items-center gap-2 animate-float border border-primary-500/30">
                                <Shield className="w-5 h-5 text-accent-gold" />
                                <span className="text-sm font-medium text-white">24/7 Seguridad</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-[#0a0a1a] rounded-2xl shadow-2xl shadow-accent-purple/20 p-3 flex items-center gap-2 animate-float border border-accent-purple/30" style={{ animationDelay: '1s' }}>
                                <Zap className="w-5 h-5 text-accent-gold" />
                                <span className="text-sm font-medium text-white">IA Automatizada</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}