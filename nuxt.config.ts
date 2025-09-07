// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2025-07-16",
  runtimeConfig: {
    public: {
      crudBaseUrl: process.env.NUXT_PUBLIC_CRUD_BASE_URL,
      crudApiKey: process.env.NUXT_PUBLIC_CRUD_API_KEY || "",
    },
  },
});
