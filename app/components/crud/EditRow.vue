<script setup lang="ts">
const props = defineProps<{
  resource: string;
  row: Record<string, any>; // data of the row being edited
}>();

const state = computed(() => {
  const { createdAt, ...rest } = props.row;
  return rest;
});

const crudBaseUrl = useRuntimeConfig().public.crudBaseUrl;
const { data: schema } = await useFetch(
  `${crudBaseUrl}/schema/${props.resource}`
);

async function onSubmit(data) {
  console.log("Form submitted:", data);

  try {
    await $fetch(`${crudBaseUrl}/${props.resource}/${props.row.id}`, {
      method: "PATCH",
      body: data, // use the actual form values
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
</script>

<template>
  <UModal>
    <!-- Trigger button -->
    <UButton
      label="Edit"
      color="primary"
      variant="outline"
      class="font-medium"
    />

    <!-- Modal content -->
    <template #content>
      <div class="max-w-md p-6 bg-white rounded-lg shadow-lg space-y-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">
          Edit {{ resource }}
        </h3>

        <!-- Form -->
        <CrudForm
          v-if="schema"
          :schema="schema"
          :initial-state="state"
          @submit="onSubmit"
        />

        <!-- Fallback -->
        <p v-else class="text-sm text-red-500">
          No schema found for {{ resource }}
        </p>
      </div>
    </template>
  </UModal>
</template>
