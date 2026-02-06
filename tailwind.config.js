/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.html",         // Tímto říkáme: "Sleduj i liptov.html, midzu.html atd."
        "./public/*.html",  // A sleduj i HTML v public
        "./public/*.txt"    // A pro jistotu i ten footer.txt
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#dcb5bc',
                    primary: '#9f6b7a', // Tvoje hlavní MotionFlow barva
                    DEFAULT: '#9f6b7a',
                    dark: '#8a5a68',
                    bg: '#fff5f7',
                    gold: '#C5A059'
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'], // Pokud chceš Outfit všude (nebo dej 'Inter')
                script: ['Great Vibes', 'cursive'],
            },
            boxShadow: {
                'soft': '0 20px 40px -15px rgba(159, 107, 122, 0.15)',
                'card': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 40px -10px rgba(159, 107, 122, 0.3)',
            }
        },
    },
    plugins: [],
}