<template>
  <div class="flex w-full">
    <!-- Sidebar -->
    <aside class="w-1/6">
      <CommonNavigation />
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <UContainer>
        <slot />
      </UContainer>
    </main>
  </div>
</template>
