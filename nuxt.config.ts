// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "nuxt-icon"],
  i18n: {
    locales: ["en", "mk"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
});
