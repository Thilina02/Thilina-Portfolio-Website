import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          100: '#f5f5f5',
          200: '#e0e0e0',
          300: '#bdbdbd',
          400: '#9e9e9e',
          500: '#757575',
          600: '#616161',
          700: '#424242',
          800: '#212121',
          900: '#121212',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'black-to-white': 'linear-gradient(to bottom, #000000, #FFFFFF)',
        'white-to-black': 'linear-gradient(to bottom, #FFFFFF, #000000)',
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideInUp: 'slideInUp 1.5s ease-out', // Added slideInUp animation
        pulse: 'pulse 2s infinite',
        bounce: 'bounce 2s infinite',
        fadeInDelayed: 'fadeInDelayed 3s ease-in-out',
        fadeOutDelayed: 'fadeOutDelayed 3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
        fadeInDelayed: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOutDelayed: {
          '0%': { opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
       
      },
    },
  },
  plugins: [],
};

export default config;
