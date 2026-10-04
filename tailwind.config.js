/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#0E1B2C', steel: '#E6ECF2', paper: '#F7F9FB', turmeric: { DEFAULT: '#F2B01E', deep: '#B97F00' }, leaf: { DEFAULT: '#1F7A4D', dark: '#155C39', soft: '#E3F2EA' }, muted: '#4B5B6E' },
      fontFamily: { display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'], sans: ['"DM Sans"', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
