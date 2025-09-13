<script setup lang="ts">
import nav from "~/data/nav.json";
const auth = useAuthStore();

const filteredNav = computed(() => {
  return nav.filter((item) => {
    if (!item.authOnly) return true;
    if (auth.isAuthenticated && item.authOnly) return true;
    return false;
  });
});
</script>

<template>
  <div class="flex w-full">
    <!-- Sidebar -->
    <aside class="w-1/6">
      <AuthLoginRegister />
      <CommonNavigation :items="filteredNav" />
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <UContainer>
        <slot />
      </UContainer>
    </main>
  </div>
</template>
