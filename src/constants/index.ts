// Navegación
export const navigation = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Cómo funciona', href: '#como-funciona' },
  { name: 'Precios', href: '#precios' },
  { name: 'Ubicaciones', href: '#ubicaciones' },
  { name: 'Contacto', href: '#contacto' },
]

// Servicios
export const services = [
  {
    icon: 'Package',
    title: 'Almacenamiento Inteligente',
    description: 'Lockers climatizados con acceso 24/7, control de inventario por IA y notificaciones en tiempo real.',
    features: ['Acceso biométrico', 'Control de temperatura', 'Inventario digital'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: 'Mic',
    title: 'Estudios de Streaming',
    description: 'Espacios profesionales listos para usar con equipamiento completo para creadores de contenido.',
    features: ['Iluminación profesional', 'Audio de alta calidad', 'Fondo virtual IA'],
    color: 'from-purple-500 to-accent-purple'
  },
  {
    icon: 'Users',
    title: 'Oficinas Cápsula',
    description: 'Espacios de coworking privados, ergonómicos y equipados para máxima productividad.',
    features: ['Escritorio ergonómico', 'Monitor 4K', 'Silla ejecutiva'],
    color: 'from-pink-500 to-rose-500'
  }
]

// Planes de precios
export const plans = [
  {
    name: 'Básico',
    price: '49',
    period: 'mes',
    description: 'Ideal para almacenamiento personal',
    features: [
      '1 espacio de almacenamiento',
      'Acceso 24/7',
      'Control de temperatura',
      'Soporte por email',
      'App móvil incluida'
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Pro',
    price: '99',
    period: 'mes',
    description: 'Para creadores y profesionales',
    features: [
      '1 estudio streaming o oficina',
      'Equipamiento profesional',
      'Internet de alta velocidad',
      'Soporte prioritario',
      'Cancelación flexible',
      'IA avanzada incluida'
    ],
    popular: true,
    color: 'from-primary-500 to-accent-purple'
  },
  {
    name: 'Empresarial',
    price: '199',
    period: 'mes',
    description: 'Para equipos y empresas',
    features: [
      'Múltiples espacios',
      'Acceso para equipo',
      'Panel de control corporativo',
      'Soporte 24/7 dedicado',
      'API personalizada',
      'IA predictiva avanzada'
    ],
    popular: false,
    color: 'from-accent-purple to-pink-500'
  }
]

// Ubicaciones
export const locations = [
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

// Testimonios
export const testimonials = [
  {
    name: 'María González',
    role: 'Creadora de Contenido',
    image: 'MG',
    content: 'Los estudios de streaming de kubic.ai cambiaron mi forma de trabajar. Todo está listo cuando llego, la iluminación es perfecta y el audio es profesional.',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Freelancer',
    image: 'CR',
    content: 'La oficina cápsula es perfecta para mis días de trabajo remoto. Mejor que cualquier coworking, más privado y con todo lo que necesito.',
    rating: 5
  },
  {
    name: 'Laura Martínez',
    role: 'Emprendedora',
    image: 'LM',
    content: 'El almacenamiento inteligente me da tranquilidad. Sé que mis pertenencias están seguras y puedo acceder cuando necesito, sin complicaciones.',
    rating: 5
  }
]

// FAQ
export const faqs = [
  {
    question: '¿Cómo funciona el acceso 24/7?',
    answer: 'Cada espacio tiene un sistema de acceso inteligente. Puedes acceder usando tu app móvil con un código QR único o mediante un código de acceso que se genera al hacer la reserva.'
  },
  {
    question: '¿Qué incluye el estudio de streaming?',
    answer: 'Incluye cámara profesional, micrófono de alta calidad, iluminación LED regulable, fondo virtual con IA, monitor 4K y conexión a internet de alta velocidad.'
  },
  {
    question: '¿Puedo cancelar mi suscripción en cualquier momento?',
    answer: 'Sí, todos nuestros planes son flexibles y puedes cancelar tu suscripción en cualquier momento sin penalización.'
  },
  {
    question: '¿Cómo funciona la IA en los espacios?',
    answer: 'La IA gestiona todo el proceso: reservas, acceso, control de temperatura, iluminación, facturación y optimización de disponibilidad de espacios.'
  },
  {
    question: '¿Hay soporte si tengo problemas?',
    answer: 'Contamos con soporte 24/7 a través de chat en la app y email. Nuestro equipo está disponible para ayudarte en cualquier momento.'
  }
]

// Redes Sociales
export const social = [
  { icon: 'Twitter', href: '#', label: 'Twitter' },
  { icon: 'Linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'Instagram', href: '#', label: 'Instagram' },
]