'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const faqs = [
  {
    question: '¿Cómo funciona el acceso 24/7?',
    answer: 'Cada espacio tiene un sistema de acceso inteligente. Puedes acceder usando tu app móvil con un código QR único o mediante un código de acceso que se genera al hacer la reserva.'
  },
  {
    question: '¿Qué incluye el estudio de streaming?',
    answer: 'Incluye cámara profesional, micrófono de alta calidad, iluminación LED regulable, fondo virtual con IA, monitor 4K y conexión a internet de alta velocidad.'
  },
  {
    question: '¿Puedo cancelar mi suscripción en cualquier momento?',
    answer: 'Sí, todos nuestros planes son flexibles y puedes cancelar tu suscripción en cualquier momento sin penalización.'
  },
  {
    question: '¿Cómo funciona la IA en los espacios?',
    answer: 'La IA gestiona todo el proceso: reservas, acceso, control de temperatura, iluminación, facturación y optimización de disponibilidad de espacios.'
  },
  {
    question: '¿Hay soporte si tengo problemas?',
    answer: 'Contamos con soporte 24/7 a través de chat en la app y email. Nuestro equipo está disponible para ayudarte en cualquier momento.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-[#0a0a1a]">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />

      {/* Efectos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        {/* Líneas decorativas */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-gold/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
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
            ✦ Preguntas Frecuentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-display mt-2 text-white"
          >
            Resolvemos tus <span className="text-gradient">dudas</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-primary-500/10 last:border-0 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-accent-gold transition-colors duration-300 group"
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-accent-gold' : 'text-white'
                  }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-all duration-300 ${openIndex === index
                      ? 'rotate-180 text-accent-gold'
                      : 'text-white/40 group-hover:text-white/60'
                    }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-white/60 leading-relaxed border-l-2 border-accent-gold/30 pl-4 ml-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}