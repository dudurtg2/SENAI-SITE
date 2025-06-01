/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'senai-blue': '#003087',
        'senai-red': '#E30613',
        'bg-layouts': '#f7f5f5',
        'button-primary': '#242342'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
