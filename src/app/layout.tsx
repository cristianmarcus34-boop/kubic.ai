import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ChatBot } from '@/components/ui/ChatBot'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Kubic.ai - Micro-espacios inteligentes con IA',
  description: 'Plataforma de alquiler y gestión de micro-espacios automatizados mediante IA. Almacenamiento, estudios streaming y oficinas cápsula 24/7.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        {children}
        <ChatBot />
      </body>
    </html>
  )
}