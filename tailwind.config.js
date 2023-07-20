/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['var(--font-text)'],
        title: ['var(--font-title)'],
      },
      colors: {
        turquesa: '#3dccc7',
        verde: '#d0f4de',
        gris: '#d3d3d3',
        texto: '#66666e',
      },
      backgroundImage: {
        'check': "url('/public/check.svg')",
      },
    },
  },
  plugins: [],
}
