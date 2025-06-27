<script setup lang="ts">
import StockRow from '@/entities/stocks/ui/StockRow.vue'
import TableGeneric from '@/shared/ui/TableGeneric.vue'

import type { Income, IncomeHeader } from '@/entities/incomes/model/types';

const props = defineProps<{
    data: Income[] | undefined
    isLoading: boolean
    isError: boolean
}>()

const header: IncomeHeader[] = [
  { text: 'ID прихода', value: 'income_id' },
  { text: 'Номер', value: 'number' },
  { text: 'Дата', value: 'date' },
  { text: 'Последнее изменение', value: 'last_change_date' },
  { text: 'Артикул поставщика', value: 'supplier_article' },
  { text: 'Размер', value: 'tech_size' },
  { text: 'Штрихкод', value: 'barcode' },
  { text: 'Количество', value: 'quantity' },
  { text: 'Сумма', value: 'total_price' },
  { text: 'Дата закрытия', value: 'date_close' },
  { text: 'Склад', value: 'warehouse_name' },
  { text: 'Номенклатура', value: 'nm_id' },
]

</script>

<template>
    <TableGeneric :headers="header" :rows="data ?? []" :isLoading="isLoading" :isError="isError"
        :rowComponent="StockRow" />

</template>