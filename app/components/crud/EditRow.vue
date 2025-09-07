<script setup lang="ts">
const props = defineProps<{
  resource: string;
  row: Record<string, any>; // data of the row being edited
}>();

const state = computed(() => {
  if (!schema.value) return {};
  // exclude system fields
  const filteredFields = schema.value.fields.filter(
    (field) => field.name !== "createdAt" && field.name !== "id"
  );

  return useFormState(filteredFields, props.row);
});

const crudBaseUrl = useRuntimeConfig().public.crudBaseUrl;
const { data: schema } = await useFetch(
  `${crudBaseUrl}/schema/${props.resource}`,
  {
    headers: crudHeaders(),
  }
);

async function onSubmit(data) {
  console.log("Form submitted:", data);

  try {
    await $fetch(`${crudBaseUrl}/${props.resource}/${props.row.id}`, {
      method: "PATCH",
      body: data,
      headers: crudHeaders(),
    });

    useToast().add({
      title: `${props.resource} updated`,
      description: `${props.resource} #${props.row.id} was updated successfully.`,
      color: "success",
    });

    await refreshNuxtData();
  } catch (err) {
    console.error(err);
    useToast().add({
      title: "Error",
      description: `Could not update ${props.resource}`,
      color: "error",
    });
  }
}

const isModalOpen = ref(false);
</script>

<template>
  <UModal v-model:open="isModalOpen">
    <!-- Trigger button -->
    <UButton
      label="Edit"
      color="primary"
      variant="outline"
      class="font-medium"
    />

    <!-- Modal content -->
    <template #content>
      <div class="max-w-md p-6 rounded-lg shadow-lg space-y-4">
        <h2 class="text-lg font-semibold mb-2">Edit {{ resource }}</h2>
        <hr />

        <!-- Form -->
        <CrudForm
          v-if="schema"
          :schema="schema"
          :initial-state="state"
          @submit="onSubmit"
          @close="isModalOpen = false"
        />

        <!-- Fallback -->
        <p v-else class="text-sm text-red-500">
          No schema found for {{ resource }}
        </p>
      </div>
    </template>
  </UModal>
</template>
