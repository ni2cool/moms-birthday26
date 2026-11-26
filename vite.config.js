import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this site at https://ni2cool.github.io/moms-birthday26/
  base: '/moms-birthday26/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
