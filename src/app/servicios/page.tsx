import { Navbar } from '@/components/sections/Navbar'
import { Footer } from '@/components/sections/Footer'
import { Container } from '@/components/ui/Container'
import { Services } from '@/components/sections/Services'
import { Sparkles } from 'lucide-react'

export default function ServiciosPage() {
    return (
        <main>
            <Navbar transparent />

            {/* Hero de Servicios */}
            <section className="relative pt-32 pb-16 overflow-hidden bg-[#0a0a1a]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>

                <Container className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-500/30">
                            <Sparkles className="w-4 h-4 text-accent-gold" />
                            Nuestros Servicios
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4 text-white">
                            Nuestros <span className="text-gradient">Servicios</span>
                        </h1>
                        <p className="text-lg text-white/60">
                            Descubre todos los espacios inteligentes que tenemos para ti.
                        </p>
                    </div>
                </Container>
            </section>

            <Services />
            <Footer />
        </main>
    )
}