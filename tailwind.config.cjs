/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
        surface: '#1e293b',
        accent: '#38bdf8',
        secondary: '#818cf8',
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 45px -20px rgba(56, 189, 248, 0.45)',
      },
    },
  },
  plugins: [],
};
