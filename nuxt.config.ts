export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],

  colorMode: {
    preference: "system",
    dataValue: "theme",
    classSuffix: "",
  },

  googleFonts: {
    families: {
      Prompt: true,
      Mali: true,
      "Archivo Black": true,
    },
  },
  routeRules: {
    "/": { ssr: false },
  },
});
