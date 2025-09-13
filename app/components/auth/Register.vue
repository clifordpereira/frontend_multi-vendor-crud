<script setup lang="ts">
const crudBaseUrl = useRuntimeConfig().public.crudBaseUrl;
const { data: schema } = await useFetch(`${crudBaseUrl}/schema/users`, {
  headers: crudHeaders(),
});

async function onSubmit(data) {
  await useCrudFetch("POST", "users", null, data);
  await navigateTo("/dashboard");
}
</script>

<template>
  <UContainer>
    <CrudForm :schema="schema" @submit="onSubmit" />
  </UContainer>
</template>
