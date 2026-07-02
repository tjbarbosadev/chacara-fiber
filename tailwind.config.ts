import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
        },
        navy: {
          950: '#050a1a',
          900: '#0a1628',
          800: '#0f1f3d',
        },
        gold: {
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B8962E',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'fiber-pattern':
          'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 50%)',
        'hero-glow':
          'radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.12) 0%, transparent 60%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
} satisfies Config;
