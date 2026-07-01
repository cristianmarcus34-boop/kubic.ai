'use client'

import { motion } from 'framer-motion'
import { MapPin, Building2, Navigation, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const locations = [
  {
    name: 'Palermo',
    address: 'Av. Santa Fe 4567, Palermo',
    spaces: 32,
    type: 'Almacenamiento + Oficinas'
  },
  {
    name: 'Belgrano',
    address: 'Av. Cabildo 3456, Belgrano',
    spaces: 28,
    type: 'Estudios + Oficinas'
  },
  {
    name: 'Puerto Madero',
    address: 'Calle 25 de Mayo 123, Puerto Madero',
    spaces: 45,
    type: 'Todos los espacios'
  }
]

export function Locations() {
  return (
    <section id="ubicaciones" className="relative py-24 overflow-hidden bg-[#0a0a1a]">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />

      {/* Efectos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
            className="text-accent-gold font-semibold text-sm uppercase tracking-wider"
          >
            ✦ Ubicaciones
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-display mt-2 text-white"
          >
            Encuentra tu <span className="text-gradient">espacio más cercano</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0a0a1a]/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-500/10 hover:border-primary-500/30 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Fondo decorativo del gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Efecto de brillo en hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45 -translate-x-full group-hover:translate-x-full" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {location.name}
                </h3>
                <div className="flex items-center gap-2 text-white/50 text-sm mt-2">
                  <MapPin className="w-4 h-4 text-accent-gold" />
                  <span>{location.address}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-primary-500/10 flex items-center justify-between">
                  <span className="text-sm text-white/40">{location.spaces} espacios</span>
                  <span className="text-sm font-medium text-accent-gold/80">{location.type}</span>
                </div>
                <button className="mt-4 w-full py-3 text-center text-sm font-medium text-white border border-primary-500/30 rounded-xl hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-purple hover:border-transparent transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/20 flex items-center justify-center gap-2">
                  <Navigation className="w-4 h-4" />
                  Ver en mapa
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}