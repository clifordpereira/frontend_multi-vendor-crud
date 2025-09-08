<script setup lang="ts">
definePageMeta({
  middleware: ["guest"],
});
</script>

<template>
  <div>
    <CommonLoginRegister />
  </div>
</template>
