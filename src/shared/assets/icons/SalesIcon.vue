<script setup lang="ts">
const props = defineProps<{
    width: string | number
    height: string | number
}>()
</script>

<template>
    <svg :width="width" :height="height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.616 19C4.15533 19 3.771 18.846 3.463 18.538C3.155 18.23 3.00067 17.8453 3 17.384V6.616C3 6.15533 3.15433 5.771 3.463 5.463C3.77167 5.155 4.15567 5.00067 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.845 5.77167 20.9993 6.156 21 6.616V17.385C21 17.845 20.8457 18.2293 20.537 18.538C20.2283 18.8467 19.8443 19.0007 19.385 19H4.616ZM4 11.192H20V8.808H4V11.192Z" />
</svg>


</template>