<script setup lang="ts">
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import type { Income } from '@/entities/incomes/model/types'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps<{
  data: Income[] | undefined
  isLoading: boolean
  isError: boolean
}>()

const chartData = computed(() => ({
  labels: props.data?.map(item => item.date) || [],
  datasets: [
    {
      label: 'Кол-во',
      backgroundColor: '#193db8',
      data: props.data?.map(item => Number(item.quantity)) || [],
    },
    {
      label: 'Доходы',
      backgroundColor: 'red',
      data: props.data?.map(item => Number(item.total_price)) || [],
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Количество и доходы по датам',
    },
  },
}
</script>

<template>
  <div v-if="data?.length" class="w-full h-[400px]">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
  <p v-else-if="isLoading">Загрузка графика...</p>
  <p v-else-if="isError">Ошибка загрузки графика</p>
</template>