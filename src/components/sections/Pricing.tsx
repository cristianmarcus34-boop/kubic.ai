'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Star } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { plans } from '@/constants/pricing'

export function Pricing() {
  return (
    <section id="precios" className="relative py-24 overflow-hidden bg-[#0a0a1a]">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />

      {/* Efectos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-accent-gold font-semibold text-sm uppercase tracking-wider"
          >
            ✦ Planes y Precios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-display mt-2 text-white"
          >
            Elige el <span className="text-gradient">plan perfecto</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-white/60 text-lg"
          >
            Sin contratos largos. Cancela cuando quieras.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-[#0a0a1a]/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col min-h-[520px] overflow-visible border ${plan.popular
                    ? 'border-primary-500/40 shadow-2xl shadow-primary-500/10 ring-1 ring-primary-500/30'
                    : 'border-primary-500/10 hover:border-primary-500/20'
                  }`}
              >
                {/* Badge "Más popular" */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <Badge className="bg-gradient-to-r from-primary-500 to-accent-purple text-white border-0 shadow-lg shadow-primary-500/30 text-[10px] px-3.5 py-1.5 font-semibold flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-current" />
                      Más popular
                    </Badge>
                  </div>
                )}

                {/* Ícono del plan con fondo degradado */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Nombre y descripción */}
                <h3 className={`text-2xl font-bold ${plan.popular ? 'text-accent-gold' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className="text-white/50 text-sm mt-1">{plan.description}</p>

                {/* Precio */}
                <div className="mt-6 flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-accent-gold' : 'text-white'}`}>
                    ${plan.price}
                  </span>
                  <span className="text-white/40">/{plan.period}</span>
                </div>

                {/* Características */}
                <ul className="mt-6 space-y-3 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                      <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón Comenzar ahora */}
                <Link href="/reservar" className="mt-4">
                  <Button
                    variant={plan.popular ? 'gradient' : 'secondary'}
                    size="lg"
                    className={`w-full ${plan.popular
                        ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white hover:shadow-2xl hover:shadow-primary-500/30 border border-primary-400/30'
                        : 'border-2 border-accent-purple/50 text-white hover:bg-gradient-to-r hover:from-accent-purple/20 hover:to-accent-pink/20'
                      }`}
                  >
                    Comenzar ahora
                  </Button>
                </Link>

                {/* Texto "Recomendado por nuestros usuarios" */}
                <div className="h-8 flex items-center justify-center mt-2">
                  {plan.popular && (
                    <div className="flex items-center justify-center gap-2 text-xs text-accent-gold/80">
                      <Zap className="w-4 h-4" />
                      <span>Recomendado por nuestros usuarios</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}