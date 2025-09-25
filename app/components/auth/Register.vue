<script setup lang="ts">
const crudBaseUrl = useRuntimeConfig().public.crudBaseUrl;
const { data: schema } = await useFetch(`${crudBaseUrl}/schema/users`, {
  headers: crudHeaders(),
});

async function onSubmit(data) {
  await useCrudFetch("POST", "users", null, data);
  const toast = useToast();
  toast.add({
    title: "Info",
    description: "Please Login to proceed",
    color: "info",
  });
  await navigateTo("/");
}
</script>

<template>
  <UContainer>
    <CrudForm :schema="schema" @submit="onSubmit" />
  </UContainer>
</template>
