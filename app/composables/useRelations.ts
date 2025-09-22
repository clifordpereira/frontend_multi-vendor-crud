// composables/useRelations.ts
import type { Relations } from "~/types/relations";

export function useRelations() {
  const relationsState = useState<Relations | null>(
    "relations-cache",
    () => null
  );
  const { callApi } = useApi();

  async function loadRelations(force = false) {
    if (!force && relationsState.value) return relationsState.value;

    const data = await callApi<Relations>("GET", "/relations");
    if (data) relationsState.value = data;
    return data;
  }

  return { relationsState, loadRelations };
}
