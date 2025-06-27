<script setup lang="ts">
defineProps({
  isLoading: Boolean,
  isError: Boolean,
  header: {
    type: Array as () => { value: string, text: string }[],
    required: true
  }
})
</script>

<template>
    <tbody class=" relative">
      <tr v-for="n in 20" :key="n" class=" bg-gray-100 border-b border-gray-200" :class="isError? 'bg-red-300': 'animate-pulse'">
        <td v-for="h in header" :key="h.value + n" class="px-4 py-2">
          <div class="w-full h-4 rounded-md shimmer" :class="isError? 'bg-red-400': 'bg-gray-300'"/>
        </td>
      </tr>
      <p v-if="isError" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md">Ошибка при загрузке данных</p>
    </tbody>
</template>