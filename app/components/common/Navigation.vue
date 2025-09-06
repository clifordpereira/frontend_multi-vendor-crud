<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import nav from "~/data/nav.json";

const items = ref<NavigationMenuItem[]>(nav);
</script>

<template>
  <div>
    <!-- Mobile: collapsed (icons only) -->
    <div class="lg:hidden w-full">
      <UNavigationMenu
        collapsed
        orientation="vertical"
        :items="items"
        class="justify-around border-t py-2"
      />
    </div>

    <!-- Desktop: vertical with labels -->
    <div class="hidden lg:block w-48">
      <UNavigationMenu
        orientation="vertical"
        :items="items"
        class="w-full justify-start"
      />
    </div>
  </div>
</template>
