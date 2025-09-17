// useApi.ts
type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "CONNECT"
  | "TRACE";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export function useApi() {
  const toast = useToast();
  const crudBaseUrl = useRuntimeConfig().public.crudBaseUrl;

  async function callApi<T>(
    method: HttpMethod,
    endpoint: string,
    body?: any,
    extraHeaders?: Record<string, string>
  ): Promise<T | null> {
    try {
      let res: ApiResponse<T>;

      if (method.toUpperCase() === "GET") {
        const { data, error } = await useFetch<ApiResponse<T>>(
          `${crudBaseUrl}${endpoint}`,
          {
            headers: {
              ...crudHeaders(),
              ...extraHeaders,
            },
          }
        );

        if (error.value) {
          throw createError({
            statusCode: error.value.statusCode ?? 500,
            statusMessage: error.value.message,
          });
        }

        res = data.value as ApiResponse<T>;
      } else {
        res = await $fetch<ApiResponse<T>>(`${crudBaseUrl}${endpoint}`, {
          method,
          body,
          headers: {
            ...crudHeaders(),
            ...extraHeaders,
          },
        });
      }

      if (!res || !res.success) {
        throw createError({
          statusCode: 400,
          statusMessage: res?.message ?? "Request failed",
        });
      }

      toast.add({
        title: "✅ Success",
        description: res.message,
        color: "success",
      });

      return res.data ?? null;
    } catch (err: any) {
      const statusCode = err?.statusCode ?? err?.response?.status ?? 500;
      const backendMsg =
        err?.data?.message ||
        err?.statusMessage ||
        err?.message ||
        "Unknown error";

      // 👇 Detailed log for developer
      const description = `[${method} ${endpoint}] ${backendMsg} (status ${statusCode})`;
      console.error("API Error:", description, err);

      // 👇 Friendly toast for user
      toast.add({
        title: "🚨 Error",
        description: backendMsg,
        color: "error",
      });

      return null;
    }
  }

  return { callApi };
}
