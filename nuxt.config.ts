// https://nuxt.com/docs/api/configuration/nuxt-config ,'@pinia@nuxt'
export default defineNuxtConfig({
 
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', "@prisma/nuxt", "nuxt-auth-utils"],
  prisma: {
    installCLI:false,
    installClient:false,
    generateClient:false,
    formatSchema:false,
    installStudio:false,
    autoSetupPrisma:false
  },
  
})