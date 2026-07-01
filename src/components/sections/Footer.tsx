'use client'

import { Sparkles, Twitter, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { NewsletterForm } from '@/components/forms/NewsletterForm'

const navigation = [
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Cómo funciona', href: '/#como-funciona' },
  { name: 'Precios', href: '/#precios' },
  { name: 'Ubicaciones', href: '/#ubicaciones' },
  { name: 'FAQ', href: '/#faq' },
]

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/kubicai', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/kubicai', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/kubicai', label: 'Instagram' },
]

export function Footer() {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '')

      if (window.location.pathname === '/') {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        router.push('/')
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 500)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <footer className="relative bg-[#0a0a1a] border-t border-primary-500/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center shadow-lg shadow-primary-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                kubic<span className="text-accent-gold">.ai</span>
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Micro-espacios inteligentes con IA para el futuro del trabajo.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-purple hover:border-transparent transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase opacity-60">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="text-white/40 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase opacity-60">
              Newsletter
            </h3>
            <p className="text-white/40 text-sm mb-4">
              Suscríbete para recibir novedades y ofertas exclusivas.
            </p>
            <NewsletterForm variant="footer" placeholder="Tu email" />
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase opacity-60">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/terminos" className="text-white/40 hover:text-primary-400 transition-colors duration-300">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-white/40 hover:text-primary-400 transition-colors duration-300">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/40 hover:text-primary-400 transition-colors duration-300">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-sm text-white/30 text-center">
          <p>© {new Date().getFullYear()} kubic.ai. Todos los derechos reservados.</p>
          <p className="mt-1 text-xs text-white/20">
            Hecho con 💜 desde Buenos Aires, Argentina
          </p>
        </div>
      </Container>
    </footer>
  )
}