// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      import('@tailwindcss/vite').then(m => m.default()),
    ],
    server: {
      host: true,
      allowedHosts: ['frontend'],
    }
  },
})
