<script setup lang="ts">
import { Bar } from 'vue-chartjs'

const props = defineProps<{
  isLoading: boolean
  isError: boolean
}>()

const chartData = {
  labels: Array.from({ length: 30 }, (_, i) => i + 1),
  datasets: [
    {
      label: 'Скелетон',
      backgroundColor: props.isError? '#ff6567': '#d1d6dc',
      borderRadius: 10,
      data: Array(30).fill(50),
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Загрузка...',
    },
  },
}

</script>

<template>
  <div class="h-full px-5 py-3" :class="isError? '': 'bar-pulse'">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.bar-pulse canvas {
  animation: pulse 1.5s infinite ease-in-out;
}
</style>