<script setup lang="ts">
const route = useRoute();
const resource = route.path.replace("/resource/", "");
</script>

<template>
  <div>
    <CrudTable :resource="resource" />
  </div>
</template>
