<script setup lang="ts">
import nav from "~/data/nav.json";
import type { NavItem } from "~/types/nav";

const typedNav = nav as NavItem[]; // cast JSON

const auth = useAuthStore();

// keep menu reactive, initially null
const menu = ref<NavItem | null>(null);

if (auth.isAuthenticated) {
  const { loadSchema } = useSchema();
  const data = await loadSchema();
  const resourceArray = extractTables(data ?? "");

  menu.value = buildMenu(resourceArray);
}

const filteredNav = computed<NavItem[]>(() => {
  // merge typedNav with menu if available
  const items = menu.value ? [...typedNav, menu.value] : [...typedNav];

  return items.filter((item) => {
    if (item.authOnly) return auth.isAuthenticated;
    if (item.guestOnly) return !auth.isAuthenticated;
    return true;
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
