import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: ['devserver-preview--plastikaos.netlify.app']
  },
  preview: {
    host: true,
    allowedHosts: ['devserver-preview--plastikaos.netlify.app']
  }
})
