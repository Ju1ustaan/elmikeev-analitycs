<script setup lang="ts">
import StockRow from '@/entities/stocks/ui/StockRow.vue'
import TableGeneric from '@/shared/ui/TableGeneric.vue'

import type { StockHeader, Stock } from '@/entities/stocks/model/types'

const props = defineProps<{
  data: Stock[] | undefined
  isLoading: boolean
  isError: boolean
}>()

const stocksHeader: StockHeader[] = [
  { text: 'Бренд', value: 'brand' },
  { text: 'Категория', value: 'category' },
  { text: 'Кол-во', value: 'quantity' },
  { text: 'Общее кол-во', value: 'quantity_full' },
  { text: 'Склад', value: 'warehouse_name' },
  { text: 'Дата', value: 'date' },
]

</script>

<template>
  <TableGeneric
    :headers="stocksHeader"
    :rows="data ?? []"
    :isLoading="isLoading"
    :isError="isError"
    :rowComponent="StockRow"/>

</template>