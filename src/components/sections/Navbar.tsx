'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { navigation } from '@/constants/navigation'

interface NavbarProps {
    transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
        setIsOpen(false)
    }

    const isTransparent = transparent && !isScrolled

    const getNavbarBackground = () => {
        if (isScrolled) {
            return 'bg-[#0a0a1a]/95 backdrop-blur-md shadow-lg shadow-primary-500/10 border-b border-primary-500/20'
        }
        if (transparent) {
            return 'bg-transparent'
        }
        return 'bg-[#0a0a1a] border-b border-primary-500/20'
    }

    const getTextColor = () => {
        if (isScrolled || !transparent) {
            return 'text-gray-300 hover:text-primary-400'
        }
        return 'text-white/90 hover:text-white'
    }

    const getLogoColor = () => {
        if (isScrolled || !transparent) {
            return 'text-white'
        }
        return 'text-white'
    }

    const getLogoAccentColor = () => {
        if (isScrolled || !transparent) {
            return 'text-accent-gold'
        }
        return 'text-accent-gold'
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavbarBackground()}`}>
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => handleNavigation('/#hero')}
                    >
                        <Image
                            src="/images/logocubic.jpg"
                            alt="Kubic.ai Logo"
                            width={40}
                            height={40}
                            className="object-contain rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-primary-500/30"
                        />
                        <span className={`text-2xl font-bold transition-colors duration-300 ${getLogoColor()}`}>
                            kubic<span className={`transition-colors duration-300 ${getLogoAccentColor()}`}>.ai</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => {
                            const isInternal = item.href.startsWith('/')
                            const isAnchor = item.href.startsWith('#')

                            if (isInternal && !isAnchor) {
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item.href)}
                                        className={`transition-colors font-medium ${getTextColor()}`}
                                    >
                                        {item.name}
                                    </button>
                                )
                            }

                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavigation(item.href)}
                                    className={`transition-colors font-medium ${getTextColor()}`}
                                >
                                    {item.name}
                                </button>
                            )
                        })}
                        <Link href="/reservar">
                            <Button
                                variant={isTransparent ? "outline" : "gradient"}
                                size="sm"
                                className={
                                    isTransparent
                                        ? "bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/20 hover:text-white hover:border-white shadow-lg hover:shadow-xl transition-all duration-300"
                                        : "bg-gradient-to-r from-primary-500 to-accent-purple text-white hover:shadow-2xl hover:shadow-primary-500/30 border border-primary-400/30"
                                }
                            >
                                Reservar ahora
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden transition-colors ${isScrolled || !transparent ? 'text-gray-300' : 'text-white'}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0a0a1a] border border-primary-500/20 shadow-2xl shadow-primary-500/10 rounded-b-2xl p-6 flex flex-col gap-4">
                        {navigation.map((item) => {
                            const isInternal = item.href.startsWith('/')
                            const isAnchor = item.href.startsWith('#')

                            if (isInternal && !isAnchor) {
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => handleNavigation(item.href)}
                                        className="text-gray-300 hover:text-primary-400 transition-colors font-medium py-2 text-center border-b border-primary-500/10"
                                    >
                                        {item.name}
                                    </button>
                                )
                            }

                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavigation(item.href)}
                                    className="text-gray-300 hover:text-primary-400 transition-colors font-medium py-2 text-center border-b border-primary-500/10"
                                >
                                    {item.name}
                                </button>
                            )
                        })}
                        <Link href="/reservar" onClick={() => setIsOpen(false)}>
                            <Button variant="gradient" size="sm" className="w-full mt-2 bg-gradient-to-r from-primary-500 to-accent-purple text-white hover:shadow-2xl hover:shadow-primary-500/30">
                                Reservar ahora
                            </Button>
                        </Link>
                    </div>
                )}
            </Container>
        </nav>
    )
}