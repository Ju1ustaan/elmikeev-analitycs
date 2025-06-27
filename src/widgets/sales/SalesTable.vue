<script setup lang="ts">
import StockRow from '@/entities/stocks/ui/StockRow.vue'
import TableGeneric from '@/shared/ui/TableGeneric.vue'

import type { Sales, SalesHeader } from '@/entities/sales/model/types';

const props = defineProps<{
  data: Sales[] | undefined
  isLoading: boolean
  isError: boolean
}>()

const header: SalesHeader[] = [
{ text: 'Номер заказа', value: 'g_number' },
  { text: 'Дата продажи', value: 'date' },
  { text: 'Дата изменения', value: 'last_change_date' },
  { text: 'Артикул поставщика', value: 'supplier_article' },
  { text: 'Размер', value: 'tech_size' },
  { text: 'Штрихкод', value: 'barcode' },
  { text: 'Сумма продажи', value: 'total_price' },
  { text: 'Скидка %', value: 'discount_percent' },
  { text: 'Скидка по промокоду', value: 'promo_code_discount' },
  { text: 'Склад', value: 'warehouse_name' },
  { text: 'Страна', value: 'country_name' },
  { text: 'ФО', value: 'oblast_okrug_name' },
  { text: 'Регион', value: 'region_name' },
  { text: 'ID прихода', value: 'income_id' },
  { text: 'ID продажи', value: 'sale_id' },
  { text: 'ODID', value: 'odid' },
  { text: 'SPP', value: 'spp' },
  { text: 'К выплате', value: 'for_pay' },
  { text: 'Финальная цена', value: 'finished_price' },
  { text: 'Цена со скидкой', value: 'price_with_disc' },
  { text: 'Номенклатура', value: 'nm_id' },
  { text: 'Предмет', value: 'subject' },
  { text: 'Категория', value: 'category' },
  { text: 'Бренд', value: 'brand' },
]

</script>

<template>
  <TableGeneric
    :headers="header"
    :rows="data ?? []"
    :isLoading="isLoading"
    :isError="isError"
    :rowComponent="StockRow"/>

</template>