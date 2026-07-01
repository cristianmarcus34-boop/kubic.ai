import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F0FE',
          100: '#B8D4F8',
          200: '#8BB8F2',
          300: '#5D9CED',
          400: '#2F80E7',
          500: '#1A6BD4',
          600: '#1553A8',
          700: '#0F3C7C',
          800: '#0A2650',
          900: '#051024',
        },
        accent: {
          purple: '#7B61FF',
          pink: '#FF6B9D',
          gold: '#F5B041',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config