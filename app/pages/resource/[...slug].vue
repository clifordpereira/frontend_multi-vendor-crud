<script setup lang="ts">
definePageMeta({
  middleware: ["authenticated"],
});

const route = useRoute();
const resource = route.path.replace("/resource/", "");
</script>

<template>
  <div>
    <CrudTable :resource="resource" />
  </div>
</template>
