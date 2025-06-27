<template>
  <tr class="text-center">
    <td
      v-for="header in headers"
      :key="String(header.value)"
      class="border-b-1 p-2" 
    >
      {{ String(item[header.value] ?? '—') }}
    </td>
  </tr>
</template>

<script setup lang="ts" generic="T extends Record<string, any>">
defineProps<{
  item: T
  headers: { value: keyof T; text: string }[]
}>()
</script>
