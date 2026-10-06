/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html",
    "./**/*.txt",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#7A967C',  // Tlumená, elegantní šalvějová (Sage)
        'brand-dark': '#2A3B2C',     // Velmi tmavá, hluboká lesní zelená (téměř do černa, super na texty)
        'brand-light': '#E8EFE9',    // Úplně jemný, světlý zeleno-šedý nádech na podkreslení
        'brand-bg': '#FBF9F6',       // Opravdu luxusní, velmi světlá slonovinová kost (žádná žlutá)
        'brand-secondary': '#4C634E' // Střední olivová na hover efekty u tlačítek
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'script': ['"Great Vibes"', 'cursive']
      }
    },
  },
  plugins: [],
}