import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json()

        if (!message) {
            return NextResponse.json(
                { error: 'Mensaje requerido' },
                { status: 400 }
            )
        }

        // ✅ MODELO ACTUALIZADO
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile", // 👈 NUEVO MODELO
                messages: [
                    { 
                        role: "system", 
                        content: `Eres un asistente experto de Kubic.ai, una plataforma de micro-espacios inteligentes con IA.

INFORMACIÓN DE KUBIC.AI:
- Somos una plataforma SaaS + PropTech que ofrece micro-espacios automatizados con IA.
- Tipos de espacios:
  • Almacenamiento Inteligente: Lockers climatizados con acceso 24/7, control de inventario por IA.
  • Estudios de Streaming: Espacios profesionales con iluminación, audio y fondo virtual IA.
  • Oficinas Cápsula: Espacios de coworking privados y ergonómicos.

- Características:
  • Acceso 24/7 con QR o código
  • IA automatizada para gestión de reservas
  • Seguridad biométrica
  • Precios desde $49/mes (Básico) hasta $199/mes (Empresarial)
  • Ubicaciones: Palermo, Belgrano y Puerto Madero

- Reservas: Se hacen desde la web o app. Acceso inmediato con QR.

Responde de forma amigable, profesional y útil. Si no sabés algo, sugerí contactar por WhatsApp al +54 11 3830-5837.`
                    },
                    { role: "user", content: message }
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        })

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Error de Groq:', errorText)
            
            return NextResponse.json(
                { error: 'Error al procesar tu mensaje. Por favor, intentá de nuevo.' },
                { status: response.status }
            )
        }

        const data = await response.json()
        
        const generatedText = data.choices[0]?.message?.content || 'Lo siento, no pude generar una respuesta. ¿Podrías reformular tu pregunta?'

        return NextResponse.json({
            response: generatedText
        })

    } catch (error) {
        console.error('Error en chat:', error)
        return NextResponse.json(
            { error: 'Error al procesar tu mensaje' },
            { status: 500 }
        )
    }
}