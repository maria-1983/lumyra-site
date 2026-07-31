/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#050505',
        gold: '#c8a24a',
        ruby: '#7a0f2d',
        mist: '#f5efe6',
      },
      boxShadow: {
        glow: '0 0 40px rgba(200, 162, 74, 0.25)',
      },
    },
  },
  plugins: [],
}
