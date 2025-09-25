<script setup lang="ts">
const auth = useAuthStore();

async function logout() {
  auth.logout();
  await navigateTo("/");
}
</script>

<template>
  <div class="flex gap-3 mb-2">
    <!-- Login Modal -->
    <UModal v-if="!auth.isAuthenticated" title="Login">
      <UButton
        label="Login"
        color="warning"
        variant="outline"
        icon="i-lucide-log-in"
        class="rounded-lg"
      />

      <template #body>
        <AuthLogin />
      </template>
    </UModal>

    <!-- Logout Button -->
    <UButton
      v-if="auth.isAuthenticated"
      label="Logout"
      color="primary"
      variant="outline"
      icon="i-lucide-log-out"
      class="rounded-lg"
      @click="logout"
    />

    <!-- Registration Modal -->
    <UModal v-if="!auth.isAuthenticated" title="User Registration">
      <UButton
        label="Register"
        color="info"
        variant="outline"
        icon="i-lucide-user-plus"
        class="rounded-lg"
      />

      <template #body>
        <AuthRegister />
      </template>
    </UModal>
  </div>
</template>
