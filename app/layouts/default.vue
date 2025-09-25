<script setup lang="ts">
import nav from "~/data/nav.json";
import type { NavItem } from "~/types/nav";

const typedNav = nav as NavItem[]; // cast JSON
const ICON_DEFAULT = "i-lucide-text";

const auth = useAuthStore();

const { loadSchema } = useSchema();
const data = await loadSchema();
const resourceArray = extractTables(data ?? "");

function buildMenu(
  tables: string[],
  label = "Resources",
  icon = "i-lucide-briefcase",
  authOnly = true
): NavItem {
  const children: NavItem[] = tables.map((table) => ({
    label: table.charAt(0).toUpperCase() + table.slice(1),
    to: `/resource/${table}`,
    icon: ICON_DEFAULT,
  }));

  return { label, icon, authOnly, children };
}

const menu = buildMenu(resourceArray);

const filteredNav = computed<NavItem[]>(() => {
  return [...typedNav, menu].filter((item) => {
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
