interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthResponse {
  token: string;
  user: User;
  refreshToken?: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    refreshToken: null as string | null,
    user: null as User | null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const res = await $fetch<AuthResponse>("/auth/login", {
          method: "POST",
          body: { email, password },
          baseURL: useRuntimeConfig().public.crudBaseUrl,
          headers: crudHeaders(),
        });

        this.token = res.token;
        this.refreshToken = res.refreshToken || null;
        this.user = res.user;
      } catch (err) {
        console.error("Login failed:", err);
        throw err;
      }
    },

    async logout() {
      this.token = null;
      this.refreshToken = null;
      this.user = null;
    },

    async refreshTokenIfNeeded() {
      if (!this.refreshToken) return;

      try {
        const res = await $fetch<AuthResponse>("/auth/refresh", {
          method: "POST",
          body: { refreshToken: this.refreshToken },
          baseURL: useRuntimeConfig().public.crudBaseUrl,
          headers: crudHeaders(),
        });

        this.token = res.token;
        this.user = res.user;
      } catch (err) {
        console.error("Token refresh failed:", err);
        this.logout();
      }
    },
  },

  persist: true,
});
