/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#cddddc',
        sage: '#b4c1b8', 
        sand: '#d0a47d',
        beige: '#e8d7cd',
        olive: '#a3a598',
        charcoal: '#353a34',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'flicker': 'flicker 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.1' },
          '5%, 95%': { opacity: '0.08' },
          '10%, 90%': { opacity: '0.24' },
          '15%, 85%': { opacity: '0.09' },
          '20%, 80%': { opacity: '0.11' },
          '25%, 75%': { opacity: '0.08' },
          '30%, 70%': { opacity: '0.24' },
          '35%, 65%': { opacity: '0.09' },
          '40%, 60%': { opacity: '0.1' },
          '45%, 55%': { opacity: '0.11' },
          '50%': { opacity: '0.13' },
        },
      },
    },
  },
  plugins: [],
};