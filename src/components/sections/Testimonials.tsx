'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const testimonials = [
  {
    name: 'María González',
    role: 'Creadora de Contenido',
    image: 'MG',
    content: 'Los estudios de streaming de kubic.ai cambiaron mi forma de trabajar. Todo está listo cuando llego, la iluminación es perfecta y el audio es profesional.',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Freelancer',
    image: 'CR',
    content: 'La oficina cápsula es perfecta para mis días de trabajo remoto. Mejor que cualquier coworking, más privado y con todo lo que necesito.',
    rating: 5
  },
  {
    name: 'Laura Martínez',
    role: 'Emprendedora',
    image: 'LM',
    content: 'El almacenamiento inteligente me da tranquilidad. Sé que mis pertenencias están seguras y puedo acceder cuando necesito, sin complicaciones.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 overflow-hidden bg-[#0a0a1a]">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />

      {/* Efectos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            ✦ Testimonios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-display mt-2 text-white"
          >
            Lo que dicen <span className="text-gradient">nuestros usuarios</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0a0a1a]/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/10 hover:border-primary-500/30 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icono de comillas decorativo */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-primary-400" />
              </div>

              {/* Avatar y nombre */}
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>

              {/* Estrellas de rating */}
              <div className="flex gap-0.5 mb-3 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold text-accent-gold" />
                ))}
              </div>

              {/* Contenido del testimonio */}
              <p className="text-white/60 leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-300">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}