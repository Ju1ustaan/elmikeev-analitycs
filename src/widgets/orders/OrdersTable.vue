<script setup lang="ts">
import StockRow from '@/entities/stocks/ui/StockRow.vue'
import TableGeneric from '@/shared/ui/TableGeneric.vue'

import type { Orders, OrdersHeader } from '../../entities/orders/model/types';

const props = defineProps<{
    data: Orders[] | undefined
    isLoading: boolean
    isError: boolean
}>()

const header: OrdersHeader[] = [
    { text: 'Номер заказа', value: 'g_number' },
    { text: 'Дата', value: 'date' },
    { text: 'Дата изменения', value: 'last_change_date' },
    { text: 'Артикул поставщика', value: 'supplier_article' },
    { text: 'Размер', value: 'tech_size' },
    { text: 'Штрихкод', value: 'barcode' },
    { text: 'Сумма продажи', value: 'total_price' },
    { text: 'Скидка %', value: 'discount_percent' },
    { text: 'Склад', value: 'warehouse_name' },
    { text: 'Регион', value: 'oblast' },
    { text: 'ID прихода', value: 'income_id' },
    { text: 'ODID', value: 'odid' },
    { text: 'Номенклатура', value: 'nm_id' },
    { text: 'Предмет', value: 'subject' },
    { text: 'Категория', value: 'category' },
    { text: 'Бренд', value: 'brand' },
    { text: 'Отмена', value: 'is_cancel' },
    { text: 'Дата отмены', value: 'cancel_dt' },
]

</script>

<template>
    <TableGeneric :headers="header" :rows="data ?? []" :isLoading="isLoading" :isError="isError"
        :rowComponent="StockRow" />

</template>