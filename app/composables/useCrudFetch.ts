// composables/useCrudFetch.ts
export async function useCrudFetch(
  method: "POST" | "PATCH" | "DELETE",
  resource: string,
  id: number | null = null,
  data: any = null
) {
  const crudBaseUrl = useRuntimeConfig().public.crudBaseUrl;

  const toastMessage: Record<
    "POST" | "PATCH" | "DELETE",
    { title: string; successMessage: string; errorMessage: string }
  > = {
    POST: {
      title: `${resource} created`,
      successMessage: `A new ${resource} was added successfully.`,
      errorMessage: `Could not save ${resource}`,
    },
    PATCH: {
      title: `${resource} updated`,
      successMessage: `${resource} #${id} was updated successfully.`,
      errorMessage: `Could not update ${resource} #${id}`,
    },
    DELETE: {
      title: `${resource} deleted`,
      successMessage: `Row ${id} deleted.`,
      errorMessage: `Could not delete ${resource} #${id}`,
    },
  };

  try {
    const url =
      method === "PATCH" || method === "DELETE"
        ? `${crudBaseUrl}/${resource}/${id}`
        : `${crudBaseUrl}/${resource}`;

    await $fetch(url, {
      method,
      ...(data && { body: data }),
      headers: crudHeaders(),
    });

    useToast().add({
      title: toastMessage[method].title,
      description: toastMessage[method].successMessage,
      color: "success",
    });

    await refreshNuxtData();
  } catch (err) {
    console.error(err);
    useToast().add({
      title: "Error",
      description: toastMessage[method].errorMessage,
      color: "error",
    });
  }
}
