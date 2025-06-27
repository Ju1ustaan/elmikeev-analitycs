<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePaginationStore } from '../stores/pagination'
import PaginationSceleton from './PaginationSceleton.vue'
import PerPageSelect from './PerPageSelect.vue'

const route = useRoute()


defineProps<{
    isLoading: boolean,
    isError: boolean,
    position?: 'top' | 'bottom'
}>()
const pagination = usePaginationStore()
const emit = defineEmits(['page-change'])
const changePage = (page: any) => {
    if(page.url){
        if(page.label.includes('Previous')){
            pagination.currentPage = Number(pagination.currentPage) - 1
        } else if(page.label.includes('Next')){
            pagination.currentPage = Number(pagination.currentPage) + 1
        } else {
            pagination.currentPage = page.label
        }
    }
}


</script>

<template>
    <div class="flex items-center justify-between gap-1 p-3 bg-blue-300 ">
        <h5 class="text-3xl !font-bold text-gray-700">{{route.name}}</h5>
        <div class="flex items-center justify-end gap-1">
            <p class="px-3 py-2 border-1 border-gray-300 rounded-md !mr-5 relative">
    <label class="top-0 -translate-y-1/2 rounded absolute -left-5 bg-white px-2 text-sm text-gray-700 font-semibold">Строк</label>

                <span>{{ pagination.total }}</span>
            </p>
            <PerPageSelect />
        <PaginationSceleton v-if="isLoading || isError" :isError="isError" :isLoading="isLoading"/>
        <p v-else v-for="page in pagination.links" :key="page.label" @click="changePage(page)"
            class="w-8 h-8 text-center leading-8 rounded-full cursor-pointer"
            :class="page.active ? 'bg-blue-200' : 'hover:bg-blue-200'">
            
            <span v-if="page.label.length < 5">
                {{ page.label }}
            </span>

            <span v-else class="flex items-center justify-center">
                <button  v-if="page.label.slice(-8) === 'Previous'" class="w-full aspect-square">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24"
                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                </button>

                <button v-else class="w-full aspect-square">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" viewBox="0 0 24 24" strokeWidth={1.5}
                    stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </button>
            </span>
        </p>
        </div>
    </div>
</template>

<style scoped>

</style>
