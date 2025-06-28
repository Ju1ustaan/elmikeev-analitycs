<script setup lang="ts">
import { ref, watch, computed } from 'vue';

import SalesRangeDatePicker from '@/widgets/sales/SalesRangeDatePicker.vue';
import OrdersTable from '@/widgets/orders/OrdersTable.vue';
import OrdersChart from '@/widgets/orders/OrdersChart.vue';
import TabView from '@/shared/ui/TabView.vue';

import { useOrders } from '@/entities/orders/model/useOrders';
import { usePaginationStore } from '@/shared/stores/pagination';
import { useRangeDateStore } from '@/shared/stores/rangeDate';

const dateStore = useRangeDateStore()
const activeTab = ref<'table' | 'chart'>('table');
const pagination = usePaginationStore()
const params = computed(() => ({
    page: pagination.currentPage,
    limit: pagination.perPage,
    dateFrom: dateStore.startDate,
    dateTo: dateStore.endDate,
}))

const { data, isLoading, isError } = useOrders(params)


watch(data, () => {
    if (data.value?.meta) {
        pagination.setMeta(data.value.meta)
    }
})
</script>

<template>
    <div class=" min-h-screen w-full">
        <div class="flex justify-between">
            <div class="flex gap-3 items-center">
                <TabView v-model="activeTab" />
                <SalesRangeDatePicker />
            </div>
        </div>
        <OrdersTable v-if="activeTab === 'table'" :data="data?.data" :isLoading="isLoading" :isError="isError" />
        <OrdersChart v-else :data="data?.data" :isLoading="isLoading" :isError="isError" />
    </div>
</template>

<style scoped></style>