<script setup lang="ts">
interface Column {
  name: string;
  type: string;
  constraints: string[];
}

interface ParsedTable {
  name: string;
  columns: Column[];
}

defineProps<{
  parsedTable: ParsedTable;
}>();
</script>

<template>
  <div>
    <table class="table-auto border-collapse border border-gray-400">
      <caption>
        {{
          parsedTable.name
        }}
      </caption>
      <thead>
        <tr>
          <th
            v-for="col in parsedTable.columns"
            :key="col.name"
            class="border border-gray-400 px-2 py-1"
          >
            <span class="text-xs text-gray-500">
              ({{ col.type }}
              <span v-if="col.constraints.length">
                , {{ col.constraints.join(", ") }} </span
              >)
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            v-for="col in parsedTable.columns"
            :key="col.name"
            class="border border-gray-400 px-2 py-1 text-center"
          >
            {{ col.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
