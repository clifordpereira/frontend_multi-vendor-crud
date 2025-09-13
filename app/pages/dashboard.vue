<!-- pages/dashboard.vue -->
<script setup lang="ts"></script>

<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1
      class="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center"
    >
      Sample Dashboard
    </h1>

    <section class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <StatsCard label="Users" value="250" />
      <StatsCard label="Developers" value="30" />
      <StatsCard label="Clients" value="100" />
    </section>
  </div>
</template>
