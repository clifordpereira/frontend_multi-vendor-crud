// composables/crudHeaders.ts
export function crudHeaders() {
  const auth = useAuthStore();

  const headers: Record<string, string> = {
    "x-api-key": useRuntimeConfig().public.crudApiKey,
  };

  if (auth.token) {
    headers.Authorization = `Bearer ${auth.token}`;
  }

  return headers;
}
