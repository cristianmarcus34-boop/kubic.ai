import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { Pricing } from '@/components/sections/Pricing'
import { Testimonials } from '@/components/sections/Testimonials'
import { Locations } from '@/components/sections/Locations'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'  // 👈 Este es el CTA (botón en la página principal)
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Locations />
      <FAQ />
      <CTA />       {/* 👈 Sección con botón "Reservar ahora" en la página principal */}
      <Footer />
    </main>
  )
}