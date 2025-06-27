<script setup lang="ts">
const props = defineProps<{
    width: string | number
    height: string | number
}>()
</script>
<template>
    <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 19.425V12.575L5 9.1V15.95L11 19.425ZM13 19.425L19 15.95V9.1L13 12.575V19.425ZM12 22.3L3 17.125V6.875L12 1.7L21 6.875V17.125L12 22.3ZM16 8.525L17.925 7.425L12 4L10.05 5.125L16 8.525ZM12 10.85L13.95 9.725L8.025 6.3L6.075 7.425L12 10.85Z"/></svg>
</template>