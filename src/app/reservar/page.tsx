'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { ReservationForm } from '@/components/forms/ReservationForm'

export default function ReservarPage() {
    return (
        <main>
            <Navbar transparent />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-[#0a0a1a]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>

                <Container className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/30">
                            <Sparkles className="w-4 h-4" />
                            Reserva tu espacio
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4 text-white">
                            Reserva tu <span className="text-gradient">espacio</span>
                        </h1>
                        <p className="text-lg text-white/60">
                            Completa el formulario y te contactaremos para confirmar tu reserva.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Formulario */}
            <section className="py-16 bg-[#0a0a1a] border-t border-primary-500/10">
                <Container>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-[#0a0a1a]/80 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 shadow-xl shadow-primary-500/5">
                            <ReservationForm
                                className="w-full"
                                onSuccess={() => console.log('✅ Reserva enviada con éxito')}
                            />
                        </div>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    )
}