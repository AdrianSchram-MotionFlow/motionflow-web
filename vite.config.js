import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        liptov: resolve(__dirname, 'liptov.html'),
        klucizprahy: resolve(__dirname, 'klucizprahy.html'),
        eventy: resolve(__dirname, 'eventy.html'),
        financovinky: resolve(__dirname, 'financovinky.html'),
        reality: resolve(__dirname, 'reality.html'),
        // Tady jsou ty nové:
        kodmidlife: resolve(__dirname, 'kodmidlife.html'),
        regada: resolve(__dirname, 'regada.html')
      }
    }
  }
})