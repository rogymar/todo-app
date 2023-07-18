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
        oliva: '#606c38',
        crema: '#fefae0',
        marron: '#dda15e',
        ladrillo: '#bc6c25',
        textos: '#353535',
        titulos: '#212529',
      },
    },
  },
  plugins: [],
}
