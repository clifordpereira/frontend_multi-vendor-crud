<script setup lang="ts">
const auth = useAuthStore();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    await auth.login(email.value, password.value);

    await navigateTo("/resource/users");
  } catch (e) {
    console.error("Login failed", e);
  }
};
</script>

<template>
  <form
    class="max-w-sm mx-auto p-6 bg-white rounded-2xl shadow space-y-4 m-2"
    @submit.prevent="handleLogin"
  >
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
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
      <label for="password" class="block text-sm font-medium text-gray-700">
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

    <div class="flex gap-1">
      <UButton
        type="submit"
        class="w-1/2"
        size="lg"
        color="primary"
        label="Login"
      />
      <UButton
        to="/register"
        class="w-1/2"
        size="lg"
        color="primary"
        label="Register"
      />
    </div>
  </form>
</template>
