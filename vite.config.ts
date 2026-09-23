import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{ name: 'three-vendor', test: /node_modules[\\/]three[\\/]/, maxSize: 400_000 }],
        },
      },
    },
  },
  test: { environment: 'jsdom', setupFiles: './tests/setup.ts', css: true },
})
