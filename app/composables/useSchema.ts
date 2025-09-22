// composables/useSchema.ts
import { useApi } from "./useApi";

export function useSchema() {
  const schemaState = useState<string | null>("schema-cache", () => null);
  const { callApi } = useApi();

  async function loadSchema(force = false) {
    if (!force && schemaState.value) return schemaState.value;

    const data = await callApi<string>("GET", "/get-schema");
    if (data) schemaState.value = data;

    return schemaState.value;
  }

  return { schemaState, loadSchema };
}
