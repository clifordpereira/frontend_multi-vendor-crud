<script setup lang="ts">
const auth = useAuthStore();

async function logout() {
  auth.logout();
  await navigateTo("/login");
}
</script>

<template>
  <div class="mt-2">
    <UButton
      v-if="auth.isAuthenticated"
      label="Logout"
      variant="subtle"
      icon="i-lucide-user"
      @click="logout"
    />
    <UButton v-else label="Login" to="/login" icon="i-lucide-user" />
  </div>
</template>
