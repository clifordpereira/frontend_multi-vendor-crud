<script setup lang="ts">
const schemaInput = ref("");
const { parsedTables } = useSchemaParser(schemaInput);

const { callApi } = useApi();
// Prefill schema on mount
onMounted(async () => {
  const data = await callApi<string>("GET", "/get-schema");
  if (data) {
    schemaInput.value = data;
  }
});

async function submitSchema() {
  if (!schemaInput.value.trim()) {
    // preview toast for empty input
    const toast = useToast();
    toast.add({
      title: "Warning",
      description: "Please enter a schema first.",
      color: "warning",
    });
    return;
  }

  // Send raw text to backend
  await callApi("POST", "/generate-schema", {
    schemaText: schemaInput.value,
  });
}
</script>

<template>
  <div class="p-6 grid grid-rows-[1fr_auto] gap-6 h-screen">
    <!-- Output Table -->
    <div class="space-y-10">
      <SchemaTable
        v-for="table in parsedTables"
        :key="table.name"
        :parsed-table="table"
      />
    </div>

    <!-- Input + Submit -->
    <div>
      <label class="block mb-2 font-semibold">Schema Input</label>
      <textarea
        v-model="schemaInput"
        placeholder="users: name, age i max-100, email, password
blood_donors: name, mobile_number s max-15, blood_group s max-3"
        class="w-full border rounded p-2"
        rows="8"
      ></textarea>

      <button
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        @click="submitSchema"
      >
        Submit
      </button>
    </div>
  </div>
</template>
