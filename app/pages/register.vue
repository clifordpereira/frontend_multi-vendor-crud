<script setup lang="ts">
const crudBaseUrl = useRuntimeConfig().public.crudBaseUrl;
const { data: schema } = await useFetch(`${crudBaseUrl}/schema/users`, {
  headers: crudHeaders(),
});

async function onSubmit(data) {
  try {
    await $fetch(`${crudBaseUrl}/users`, {
      method: "POST",
      body: data,
      headers: crudHeaders(),
    });

    useToast().add({
      title: `users created`,
      description: `A new users was added successfully.`,
      color: "success",
    });

    await refreshNuxtData();
    await navigateTo("/resource/users");
  } catch (err) {
    console.error(err);
    useToast().add({
      title: "Error",
      description: `Could not save users`,
      color: "error",
    });
  }
}
</script>

<template>
  <UContainer>
    <CrudForm :schema="schema" @submit="onSubmit" />
  </UContainer>
</template>
