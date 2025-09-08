import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export default defineNuxtPlugin(() => {
  const pinia = usePinia(); // provided by @pinia/nuxt
  pinia.use(piniaPluginPersistedstate);
});
