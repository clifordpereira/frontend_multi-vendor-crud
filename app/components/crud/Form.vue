<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";

const props = defineProps<{
  schema: {
    resource: string;
    fields: { name: string; type: string; required?: boolean }[];
  };
  initialState?: Record<string, any>;
}>();

const emit = defineEmits<{
  (e: "submit", event: FormSubmitEvent<any>): void;
}>();

// filter out system fields
const filteredFields = props.schema.fields.filter(
  (field) => field.name !== "createdAt" && field.name !== "id"
);

// dynamically build zod schema
const formSchema = useDynamicZodSchema(filteredFields);

// reactive state for form data
const state = reactive<Record<string, any>>({});
filteredFields.forEach((field) => {
  // use initial value if provided, otherwise empty
  state[field.name] = props.initialState?.[field.name] ?? "";
});

function handleSubmit(event: FormSubmitEvent<any>) {
  emit("submit", event.data);
}
</script>

<template>
  <UForm
    :schema="formSchema"
    :state="state"
    class="space-y-4"
    @submit="handleSubmit"
  >
    <UFormField
      v-for="field in filteredFields"
      :key="field.name"
      :label="field.name"
      :name="field.name"
    >
      <UInput
        v-if="field.type === 'string'"
        v-model="state[field.name]"
        :required="field.required"
      />

      <UInput
        v-else-if="field.type === 'number'"
        v-model.number="state[field.name]"
        type="number"
        :required="field.required"
      />

      <UInput
        v-else-if="field.type === 'date'"
        v-model="state[field.name]"
        type="date"
        :required="field.required"
      />

      <UCheckbox
        v-else-if="field.type === 'boolean'"
        v-model="state[field.name]"
      />
    </UFormField>

    <UButton type="submit"> Submit </UButton>
  </UForm>
</template>
