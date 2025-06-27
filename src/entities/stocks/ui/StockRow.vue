<template>
  <tr class="text-center">
    <td v-for="item in header" class="border-b-1 p-2">{{ stock[item.value] }}</td>
  </tr>
</template>

<script setup lang="ts">
import type { Stock, StockHeader } from '../model/types'

defineProps<{ stock: Stock, header: StockHeader[] }>()
</script>