export function crudHeaders() {
  return { "x-api-key": useRuntimeConfig().public.crudApiKey };
}
