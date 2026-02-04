import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                liptov: resolve(__dirname, 'liptov.html'),
                financovinky: resolve(__dirname, 'financovinky.html'),
                midzu: resolve(__dirname, 'midzu.html'),
                klucizprahy: resolve(__dirname, 'klucizprahy.html'),
                eventy: resolve(__dirname, 'eventy.html'),
                reality: resolve(__dirname, 'reality.html'),
            },
        },
    },
})