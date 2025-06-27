<script setup lang="ts">
import { usePaginationStore } from '../stores/pagination';

const pagination = usePaginationStore()
defineProps<{
  position?: 'top' | 'bottom'
}>()
</script>

<template>
  <div class="flex items-center gap-2 relative">
    <label for="per-page" :class="position === 'bottom'? 'bottom-0 translate-y-1/7':'top-0 -translate-y-1/2'" class="rounded absolute -left-5 bg-white px-2 text-sm text-gray-700 font-semibold w-full">Показать по</label>
    <select
      id="per-page"
      class="border border-gray-300 rounded-md px-3 py-2 text-sm w-[100px]"
      v-model="pagination.perPage"
      @change="pagination.changePerPage(pagination.perPage)"
    >
      <option :value="'10'">10</option>
      <option :value="'25'">25</option>
      <option :value="'50'">50</option>
      <option :value="'100'">100</option>
    </select>
  </div>
</template>