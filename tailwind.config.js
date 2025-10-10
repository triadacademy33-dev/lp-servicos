/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Laranja
        primary: {
          '50': '#FFF4ED',
          '100': '#FFE8D6',
          '200': '#FFD1AD',
          '300': '#FFB178',
          '400': '#FF8A41',
          '500': '#FF6B0F', // Cor principal laranja vibrante
          '600': '#F05000',
          '700': '#C73F00',
          '800': '#9E3400',
          '900': '#7D2C00',
        },
        // Secondary - Laranja escuro
        secondary: {
          '400': '#FF8A41',
          '500': '#FF6B0F',
          '600': '#F05000',
        },
        // Accent - Laranja claro/amarelo
        accent: {
          '400': '#FFB178',
          '500': '#FF8A41',
          '600': '#FF6B0F',
        },
        // Dark - Tons escuros preto
        dark: {
          '700': '#2A2A2A',
          '800': '#1A1A1A',
          '900': '#0F0F0F',
          '950': '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in',
        'slide-up': 'slideUp 0.7s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 87, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 87, 255, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};