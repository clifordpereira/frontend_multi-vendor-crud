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
    endpoint: string, // e.g. "/test"
    body?: any,
    extraHeaders?: Record<string, string>
  ): Promise<T | null> {
    try {
      const res = await $fetch<ApiResponse<T>>(`${crudBaseUrl}${endpoint}`, {
        method,
        body,
        headers: {
          ...crudHeaders(),
          ...extraHeaders,
        },
      });

      if (res.success) {
        toast.add({
          title: "Success",
          description: res.message,
          color: "success",
        });
      } else {
        toast.add({
          title: "Error",
          description: res.message,
          color: "error",
        });
      }

      return res.data ?? null;
    } catch (err) {
      console.error(err);
      toast.add({
        title: "Error",
        description: "Server Error. Check console.",
        color: "error",
      });
      return null;
    }
  }

  return { callApi };
}
