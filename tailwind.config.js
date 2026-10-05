/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#1A120E',
          900: '#0E0907',
          800: '#1A120E',
          700: '#241710',
          600: '#2E1F16',
          500: '#3A2820',
        },
        cream: {
          DEFAULT: '#F5EFE5',
          light: '#FAF7F1',
          dark: '#E8DFD0',
        },
        caramel: {
          DEFAULT: '#A97945',
          light: '#C99A66',
          dark: '#8B5E2E',
        },
        gold: {
          DEFAULT: '#B58A4A',
          light: '#D4A961',
          dark: '#9A7338',
        },
        taupe: {
          DEFAULT: '#8D7B68',
          light: '#A89888',
          dark: '#6F5F4E',
        },
        charcoal: '#171513',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(3.5rem, 10vw, 9rem)',
        'display': 'clamp(2.5rem, 7vw, 6rem)',
        'section': 'clamp(2rem, 5vw, 4.5rem)',
      },
      letterSpacing: {
        'ultra': '0.3em',
        'mega': '0.5em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -5%)' },
          '20%': { transform: 'translate(-10%, 5%)' },
          '30%': { transform: 'translate(5%, -10%)' },
          '40%': { transform: 'translate(-5%, 15%)' },
          '50%': { transform: 'translate(-10%, 5%)' },
          '60%': { transform: 'translate(15%, 0)' },
          '70%': { transform: 'translate(0, 10%)' },
          '80%': { transform: 'translate(-15%, 0)' },
          '90%': { transform: 'translate(10%, 5%)' },
        },
      },
    },
  },
  plugins: [],
};
