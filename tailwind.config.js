/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./*.html",                 // <--- TADY JE TA ZMĚNA (Sleduje VŠECHNY html soubory)
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    bg: '#FFFBFD',
                    dark: '#1A1A1A',
                    primary: '#A85A72',
                    secondary: '#D68C9F',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                script: ['Great Vibes', 'cursive'],
            }
        },
    },
    plugins: [],
}