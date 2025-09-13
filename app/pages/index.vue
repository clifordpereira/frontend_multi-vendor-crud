<!-- pages/how-to-use.vue -->
<script setup lang="ts">
useSeoMeta({
  title: "How to Use - Nuxt CRUD Frontend",
  description:
    "Step-by-step guide for using this hosted CRUD frontend website.",
});
</script>

<template>
  <div class="max-w-5xl mx-auto p-6 space-y-10">
    <!-- Hero -->
    <header class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">
        CRUD Frontend
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        With only the database schema and no additional code, you can
        <em>Create, Read, Update, and Delete</em> records connected to the
        backend API.
      </p>
    </header>

    <!-- Guide Sections -->
    <section class="grid gap-6 sm:grid-cols-2">
      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Navigation</h2>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          Use the sidebar or top navigation to move between resources:
        </p>
        <p>Example:</p>
        <ul class="list-disc list-inside mt-2 text-gray-700 dark:text-gray-400">
          <li><strong>Workers</strong> → Manage Workers data</li>
          <li><strong>Job</strong> → Manage Job requests</li>
          <li><strong>Reviews</strong> → Manage reviews of jobs</li>
        </ul>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Viewing Records</h2>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          Open a resource to see a table of all records. Each row represents a
          single entry from the backend.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Adding Records</h2>
        </template>
        <ol
          class="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-400"
        >
          <li>Click the <strong>Add New</strong> button.</li>
          <li>Fill out the form fields.</li>
          <li>Click <strong>Save</strong> to create the new record.</li>
        </ol>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Editing Records</h2>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          Click the <strong>Edit</strong> button to open the form pre-filled
          with data. Update and save changes instantly.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Deleting Records</h2>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          Use the <strong>Delete</strong> button in a row to remove a record
          permanently.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">Support</h2>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          If you face issues, reach out to the project maintainer for help or
          feature requests.
        </p>
      </UCard>
    </section>

    <!-- Contact Info -->
    <UCard>
      <template #header>
        <h2 class="text-xl font-semibold">Contact & Links</h2>
      </template>
      <div class="space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          <strong>Phone: </strong>
          <a href="tel:9846999304" class="text-primary hover:underline"
            >9846999304</a
          >
        </p>
        <p>
          <strong>Email: </strong>
          <a
            href="mailto:cliford.pereira@gmail.com"
            class="text-primary hover:underline"
            >cliford.pereira@gmail.com</a
          >
        </p>
        <p>
          <strong>GitHub: </strong>
          <a
            href="https://github.com/clifordpereira/nuxt-crud-frontend"
            target="_blank"
            class="text-primary hover:underline"
            >Nuxt CRUD Frontend Repo</a
          >
        </p>
      </div>
    </UCard>

    <!-- Back Button -->
    <div class="text-center">
      <UButton to="/dashboard" color="primary" size="lg">
        Sample Dashboard
      </UButton>
    </div>
  </div>
</template>
