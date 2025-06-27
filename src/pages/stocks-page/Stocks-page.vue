<script setup lang="ts">
import { ref, watch, computed } from 'vue';

import StocksFilter from '@/widgets/stocks/StocksFilter.vue';
import StocksTable from '@/widgets/stocks/StocksTable.vue';
import TabView from '@/shared/ui/TabView.vue';

import { useStocks } from '@/entities/stocks/model/useStocks';
import { usePaginationStore } from '@/shared/stores/pagination';
import { useDateStore } from '@/shared/stores/date';

const dateStore = useDateStore()
const activeTab = ref<'table' | 'chart'>('table');
const pagination = usePaginationStore()
const params = computed(() => ({
  page: pagination.currentPage,
  limit: pagination.perPage,
  dateFrom: dateStore.date,
}))

const { data, isLoading, isError } = useStocks(params)


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
                <StocksFilter />
            </div>
        </div>
        <StocksTable v-if="activeTab === 'table'" :data="data?.data" :isLoading="isLoading" :isError="isError" />
        <div v-else class="bg-red-400 w-full h-10"></div>
    </div>
</template>

<style scoped></style>