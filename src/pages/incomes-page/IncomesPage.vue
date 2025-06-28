<script setup lang="ts">
import { ref, watch, computed } from 'vue';

import SalesRangeDatePicker from '@/widgets/sales/SalesRangeDatePicker.vue';
import IncomesTable from '@/widgets/incomes/IncomesTable.vue';
import IncomesChart from '@/widgets/incomes/IncomesChart.vue';
import TabView from '@/shared/ui/TabView.vue';

import { useIncomes } from '@/entities/incomes/model/useIncomes';
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

const { data, isLoading, isError } = useIncomes(params)


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
        <IncomesTable v-if="activeTab === 'table'" :data="data?.data" :isLoading="isLoading" :isError="isError" />
        <IncomesChart v-else :data="data?.data" :isLoading="isLoading" :isError="isError" />
    </div>
</template>

<style scoped></style>