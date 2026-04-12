/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#1a1a2e',
          50: '#f0f0f7',
          100: '#e1e1ef',
          200: '#c3c3df',
          300: '#a5a5cf',
          400: '#8787bf',
          500: '#6969af',
          600: '#4b4b8f',
          700: '#2d2d6f',
          800: '#1a1a2e',
          900: '#0d0d17',
        },
        gold: {
          DEFAULT: '#c9a84c',
          50: '#fdf8ec',
          100: '#fbf1d9',
          200: '#f7e3b3',
          300: '#f3d58d',
          400: '#efc767',
          500: '#c9a84c',
          600: '#a88a3d',
          700: '#876c2e',
          800: '#664e1f',
          900: '#453010',
        },
        cream: {
          DEFAULT: '#f8f4ef',
          50: '#fefdfb',
          100: '#fdfaf7',
          200: '#f8f4ef',
          300: '#f0e8da',
          400: '#e8dcc5',
          500: '#e0d0b0',
        },
        burgundy: {
          DEFAULT: '#8b1a4a',
          50: '#fdf0f5',
          100: '#fbe1eb',
          200: '#f5c3d7',
          300: '#efa5c3',
          400: '#e987af',
          500: '#c9517d',
          600: '#a93361',
          700: '#8b1a4a',
          800: '#6b1238',
          900: '#4b0a26',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(201, 168, 76, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c 0%, #f5d98b 50%, #c9a84c 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(26,26,46,0.7) 0%, rgba(26,26,46,0.9) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201, 168, 76, 0.3)',
        'gold-lg': '0 8px 40px rgba(201, 168, 76, 0.4)',
        'dark': '0 4px 20px rgba(0, 0, 0, 0.5)',
        'dark-lg': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
