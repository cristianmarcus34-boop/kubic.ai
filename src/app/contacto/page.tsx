'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Container } from '@/components/ui/Container'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { ContactForm } from '@/components/forms/ContactForm'

// ✅ Importar el mapa con SSR desactivado
const GoogleMapComponent = dynamic(
    () => import('@/components/ui/GoogleMap'),
    {
        ssr: false,
        loading: () => (
            <div className="aspect-video bg-[#0a0a1a] rounded-lg flex items-center justify-center border border-primary-500/5">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
                    <span className="text-white/30 text-sm">Cargando mapa...</span>
                </div>
            </div>
        )
    }
)

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

// 📍 TUS COORDENADAS ACTUALIZADAS
const center = {
    lat: -34.776396,
    lng: -58.292202,
}

export default function ContactoPage() {
    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            info: 'info@kubic.ai',
            href: 'mailto:info@kubic.ai'
        },
        {
            icon: Phone,
            title: 'Teléfono',
            info: '+54 11 1234-5678',
            href: 'tel:+541138305837'
        },
        {
            icon: MapPin,
            title: 'Ubicación',
            info: 'Buenos Aires, Argentina',
            href: '#'
        }
    ]

    return (
        <main>
            <Navbar transparent />

            {/* Hero de Contacto */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-[#0a0a1a]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
                </div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/30">
                            <Sparkles className="w-4 h-4 text-accent-gold" />
                            Contáctanos
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight text-white">
                            ¿Tienes alguna <span className="text-gradient">pregunta?</span>
                        </h1>
                        <p className="mt-6 text-lg text-white/60 leading-relaxed">
                            Estamos aquí para ayudarte. Cuéntanos qué necesitas y te responderemos lo antes posible.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Formulario y contacto */}
            <section className="py-16 bg-[#0a0a1a] border-t border-primary-500/10">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Información de contacto */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">
                                Información de contacto
                            </h2>
                            <p className="text-white/60 mb-8">
                                Puedes contactarnos a través de cualquiera de estos medios.
                                Estamos disponibles de lunes a viernes de 9:00 a 18:00.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a1a]/80 border border-primary-500/10 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary-500/20">
                                                <Icon className="w-5 h-5 text-primary-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-white/40">{item.title}</p>
                                                <p className="font-medium text-white group-hover:text-primary-400 transition-colors duration-300">{item.info}</p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>

                            {/* Google Maps con TUS coordenadas */}
                            <div className="mt-8 p-4 bg-[#0a0a1a]/80 border border-primary-500/10 rounded-xl overflow-hidden">
                                {GOOGLE_MAPS_API_KEY ? (
                                    <GoogleMapComponent apiKey={GOOGLE_MAPS_API_KEY} />
                                ) : (
                                    <div className="aspect-video bg-[#0a0a1a] rounded-lg flex items-center justify-center border border-primary-500/5">
                                        <MapPin className="w-8 h-8 text-primary-400/40" />
                                        <span className="text-white/30 ml-2">Configura la API Key</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Formulario con ContactForm */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 shadow-xl shadow-primary-500/5">
                                <h2 className="text-2xl font-bold text-white mb-6">
                                    Envíanos un mensaje
                                </h2>

                                <ContactForm
                                    className="w-full"
                                    onSuccess={() => console.log('Formulario de contacto enviado')}
                                />
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    )
}