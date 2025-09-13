<!-- components/StatsCard.vue -->
<script setup lang="ts">
defineProps<{
  label: string;
  value: number | string;
}>();
</script>

<template>
  <div class="rounded-2xl shadow-md bg-white dark:bg-gray-800 p-6 text-center">
    <p class="text-3xl font-bold text-primary">{{ value }}</p>
    <p class="text-gray-600 dark:text-gray-300 mt-2">{{ label }}</p>
  </div>
</template>
