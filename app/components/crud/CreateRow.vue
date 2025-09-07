<script setup lang="ts">
const props = defineProps<{
  resource: string;
}>();

const crudBaseUrl = useRuntimeConfig().public.crudBaseUrl;
const { data: schema } = await useFetch(
  `${crudBaseUrl}/schema/${props.resource}`,
  {
    headers: crudHeaders(),
  }
);

async function onSubmit(data) {
  try {
    await $fetch(`${crudBaseUrl}/${props.resource}`, {
      method: "POST",
      body: data,
      headers: crudHeaders(),
    });

    useToast().add({
      title: `${props.resource} created`,
      description: `A new ${props.resource} was added successfully.`,
      color: "success",
    });

    await refreshNuxtData();
  } catch (err) {
    console.error(err);
    useToast().add({
      title: "Error",
      description: `Could not save ${props.resource}`,
      color: "error",
    });
  }
}

const isModalOpen = ref(false);
</script>

<template>
  <div>
    <UModal v-model:open="isModalOpen">
      <!-- Trigger button -->
      <UButton label="Add New" color="neutral" variant="subtle" />

      <template #content>
        <div class="p-6 w-[400px] rounded-lg shadow-lg">
          <!-- Modal header -->
          <h2 class="text-lg font-semibold mb-4">
            Add New {{ props.resource }}
          </h2>
          <hr />

          <div class="mt-4">
            <!-- Dynamic form -->
            <div v-if="schema">
              <CrudForm
                :schema="schema"
                @submit="onSubmit"
                @close="isModalOpen = false"
              />
            </div>

            <!-- Fallback -->
            <p v-else class="text-gray-500">
              No schema found for {{ props.resource }}
            </p>
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>

<style scoped>
/* Optional: max height and scroll for long forms */
div[role="dialog"] {
  max-height: 80vh;
  overflow-y: auto;
}
</style>
