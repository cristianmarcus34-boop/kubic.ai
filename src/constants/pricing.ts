import { Sparkles, Star, Building2 } from 'lucide-react'  // 👈 Star en lugar de Crown

export const plans = [
  {
    name: 'Básico',
    icon: Sparkles,
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
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    name: 'Pro',
    icon: Star,  // 👈 Star en lugar de Crown
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
    color: 'from-primary-500 to-accent-purple',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200'
  },
  {
    name: 'Empresarial',
    icon: Building2,
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
    color: 'from-accent-purple to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  }
]