'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
    role: 'user' | 'assistant'
    content: string
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: '👋 ¡Hola! Soy el asistente de Kubic.ai. ¿En qué puedo ayudarte? Podés preguntarme sobre espacios, precios, ubicaciones o cómo funciona nuestra IA.'
        }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return

        const userMessage = { role: 'user' as const, content: input }
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            })

            const data = await response.json()

            if (response.ok) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
            } else {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: '❌ Lo siento, tuve un error. Por favor, intentá de nuevo o contactanos por WhatsApp.'
                }])
            }
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: '❌ Error de conexión. Por favor, intentá de nuevo.'
            }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* Botón flotante con rebote en el rayo */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 group"
            >
                {/* Anillo de pulso sutil (casi invisible) */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-purple/20 animate-ping" />

                {/* Botón principal */}
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 via-primary-500 to-accent-purple flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/10">

                    {/* 🌟 RAYO CON REBOTE */}
                    <div className="animate-bounce-slow">
                        <svg
                            className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:rotate-12 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>

                    {/* Badge "IA" */}
                    <span className="absolute -top-1 -right-1 text-[7px] font-bold bg-accent-gold text-black px-1.5 py-0.5 rounded-full shadow-md border border-white/10">
                        IA
                    </span>
                </div>
            </button>

            {/* Ventana del chat */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[90vw] bg-[#0a0a1a] border border-primary-500/20 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="p-4 bg-gradient-to-r from-primary-500/20 to-accent-purple/20 border-b border-primary-500/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm">Asistente Kubic.ai</h3>
                                <p className="text-white/40 text-xs flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                                    IA en línea
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/40 hover:text-white transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mensajes */}
                    <div className="h-80 overflow-y-auto p-4 space-y-3 bg-[#0a0a1a]/50">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-xl text-sm ${msg.role === 'user'
                                            ? 'bg-gradient-to-r from-primary-500 to-accent-purple text-white'
                                            : 'bg-white/5 text-white/80 border border-white/5'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 text-white/80 p-3 rounded-xl flex items-center gap-2">
                                    <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    <span className="text-sm">Escribiendo...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-primary-500/10 flex gap-2 bg-[#0a0a1a]">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Escribí tu pregunta..."
                            className="flex-1 px-4 py-2 bg-[#0a0a1a]/50 border border-primary-500/20 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-primary-500/50 text-sm"
                            disabled={isLoading}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={isLoading || !input.trim()}
                            className="p-2 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>

                    {/* WhatsApp contact */}
                    <div className="p-2 text-center border-t border-primary-500/5">
                        <a
                            href="https://wa.me/5491138305837"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/30 hover:text-white/60 text-xs transition-colors inline-flex items-center gap-1"
                        >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            ¿Necesitás ayuda humana? Contactanos por WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </>
    )
}