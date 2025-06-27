<script setup lang="ts">
import { useDateStore } from '@/shared/stores/date'

const dateStore = useDateStore()
</script>

<template>
  <div class="flex gap-4 items-center relative">
    <label for="date" class="absolute top-0 -left-2 -translate-y-1/2 bg-white px-2 text-sm text-gray-700 font-semibold">Дата</label>
    <input
    disabled
      id="date"
      type="date"
      class="border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
      v-model="dateStore.date"
      @change="dateStore.changeDate(dateStore.date)"
    />
  </div>
</template>
