<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import type { Component } from 'vue'
import TableSceleton from './TableSceleton.vue';
import Pagination from './Pagination.vue';

const props = defineProps<{
  headers: { text: string; value: string }[]
  rows: any[]
  isLoading: boolean
  isError: boolean
  rowComponent: Component
}>()

const topScroll = ref<HTMLElement | null>(null)
const mainScroll = ref<HTMLElement | null>(null)
const scrollWidth = ref<number>(0)

onMounted(() => {
  if (mainScroll.value && topScroll.value) {
    const table = mainScroll.value.querySelector('table')
    if (table) {
      scrollWidth.value = table.scrollWidth
    }

    mainScroll.value.addEventListener('scroll', () => {
      if (topScroll.value) topScroll.value.scrollLeft = mainScroll.value!.scrollLeft
    })

    topScroll.value.addEventListener('scroll', () => {
      if (mainScroll.value) mainScroll.value.scrollLeft = topScroll.value!.scrollLeft
    })
  }
})
</script>

<template>
  <Pagination :isLoading="isLoading" :isError="isError" />
   <div class="relative w-full">
    <div ref="topScroll" class="custom-scroll top-scroll overflow-x-auto overflow-y-hidden absolute top-0 left-0 right-0 z-100">
      <div :style="{ width: scrollWidth + 'px', height: '1px' }"></div>
    </div>
  <div  ref="mainScroll" class="custom-scroll overflow-x-auto relative">
    <table class="w-full rounded overflow-hidden border border-gray-200 bg-blue-200 text-sm">
      <thead class="bg-blue-300">
        <tr>
          <th v-for="header in headers" :key="header.value" class="p-2">
            {{ header.text }}
          </th>
        </tr>
      </thead>

      <TableSceleton v-if="isLoading || isError" :isError="isError" :isLoading="isLoading" :header="headers" />

      <tbody class="" v-else>
        <component v-for="row in rows" :key="row.nm_id ?? row.id" :is="rowComponent" :stock="row" :header="headers" />
      </tbody>
    </table>
  </div>
   </div>
   
  <Pagination :isLoading="isLoading" :isError="isError" />
</template>


<style scoped>

/* Firefox */
@supports (scrollbar-width: auto) {
  .overflow-x-auto {
    scrollbar-width: thin;
    scrollbar-color: #1e3a8a #e0e7ff;
  }
}

/* top scroll */

.custom-scroll::-webkit-scrollbar {
  height: 6px;
}
.custom-scroll::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 8px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background: #1e3a8a;
  border-radius: 8px;
}
.custom-scroll::-webkit-scrollbar-thumb:hover {
  background: #3b82f6;
}

.top-scroll {
  pointer-events: auto;
}
</style>
