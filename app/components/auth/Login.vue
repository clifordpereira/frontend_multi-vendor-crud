<script setup lang="ts">
const auth = useAuthStore();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    await auth.login(email.value, password.value);

    await navigateTo("/dashboard");
  } catch (e) {
    useToast().add({
      title: "Login Error",
      description: e.message ?? "An error occurred while logging in",
      color: "error",
    });
  }
};
</script>

<template>
  <form
    class="w-full max-w-sm mx-auto p-6 space-y-5"
    @submit.prevent="handleLogin"
  >
    <div>
      <label for="email" class="block text-sm font-medium text-gray-600">
        Email
      </label>
      <UInput
        id="email"
        v-model="email"
        placeholder="Enter your email"
        class="mt-1 w-full"
      />
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-600">
        Password
      </label>
      <UInput
        id="password"
        v-model="password"
        type="password"
        placeholder="Enter your password"
        class="mt-1 w-full"
      />
    </div>

    <div class="flex justify-end gap-3 pt-3">
      <UButton type="submit" size="lg" color="neutral" label="Login" />
    </div>
  </form>
</template>
