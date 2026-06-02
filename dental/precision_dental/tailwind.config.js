/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          sand: '#EFD19F',
          brown: '#C5A97A',
          taupe: '#C5B9AC',
          dark: '#4A3728',
          cream: '#F7F4EE',
          white: '#FFFFFF',
        },
        muted: '#614A39',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 26px 80px rgba(74, 55, 40, 0.16)',
        card: '0 18px 55px rgba(74, 55, 40, 0.12)',
      },
    },
  },
  plugins: [],
};
