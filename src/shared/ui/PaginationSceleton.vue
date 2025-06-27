<script setup lang="ts">
defineProps({
    isLoading: Boolean,
    isError: Boolean
})
</script>

<template>
    <div class="flex items-center gap-1 rounded-t-lg" :class="isLoading ? 'animate-pulse' : ''">
        <button class="w-8 aspect-square">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <p v-for="page in 10" :key="page" class="w-8 h-8 shimmer text-center leading-8 rounded-full "  :class="isError? 'bg-red-400': 'bg-blue-200'">

        </p>
        <button class="w-8 aspect-square">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </div>
</template>
