'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      {/* Fondo con gradiente de colores vibrantes */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a3e]" />

      {/* Efectos de color vibrante */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos de colores */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-pink/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Líneas decorativas de color */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent" />

        {/* Puntos de colores */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary-400 rounded-full shadow-lg shadow-primary-400/50" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-accent-purple rounded-full shadow-lg shadow-accent-purple/50" />
        <div className="absolute bottom-10 left-20 w-2 h-2 bg-accent-pink rounded-full shadow-lg shadow-accent-pink/50" />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary-300 rounded-full shadow-lg shadow-primary-300/50" />
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-accent-gold rounded-full shadow-lg shadow-accent-gold/50" />
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-primary-400 rounded-full shadow-lg shadow-primary-400/50" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge superior con color */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-accent-purple/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/30 shadow-lg shadow-primary-500/10">
              <Sparkles className="w-4 h-4 text-accent-gold" />
              <span>✨ Más de 100+ espacios disponibles</span>
            </div>

            {/* Título principal con colores vibrantes */}
            <div className="flex justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-6 leading-tight bg-gradient-to-r from-primary-500/20 via-accent-purple/20 to-accent-pink/20 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-2xl inline-block border border-primary-500/20 shadow-2xl shadow-primary-500/10">
                <span className="text-white">¿Listo para</span>{' '}
                <span className="relative">
                  <span className="text-accent-gold relative z-10">transformar</span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent-gold/30 rounded-full blur-sm" />
                </span>{' '}
                <span className="text-white">tu forma de trabajar?</span>
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Únete a cientos de profesionales que ya están usando espacios inteligentes con IA.
              Reserva tu espacio hoy y comienza a trabajar de manera más inteligente.
            </p>

            {/* Botones principales con colores vibrantes */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/reservar">
                <Button
                  variant="gradient"
                  size="lg"
                  className="group bg-gradient-to-r from-primary-500 to-accent-purple text-white hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 px-8 py-4 text-lg border border-primary-400/30"
                >
                  Comenzar ahora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/precios">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-accent-purple/50 text-white hover:bg-gradient-to-r hover:from-accent-purple hover:to-accent-pink hover:border-transparent transition-all duration-300 px-8 py-4 text-lg"
                >
                  Ver planes
                </Button>
              </Link>
            </div>

            {/* Beneficios rápidos con colores */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-white/80 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-primary-500/20 hover:bg-primary-500/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-lg shadow-primary-500/30">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">IA Automatizada</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/80 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-accent-purple/20 hover:bg-accent-purple/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center shadow-lg shadow-accent-purple/30">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">24/7 Disponibilidad</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/80 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-accent-pink/20 hover:bg-accent-pink/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-pink to-accent-gold flex items-center justify-center shadow-lg shadow-accent-pink/30">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">Seguridad Avanzada</span>
              </div>
            </div>

            {/* Texto de confianza */}
            <p className="mt-8 text-white/40 text-sm">
              ✓ Sin contratos largos  ✓ Cancelación flexible  ✓ Soporte 24/7
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}