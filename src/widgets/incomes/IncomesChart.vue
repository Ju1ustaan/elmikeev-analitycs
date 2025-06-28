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
import BarChartSkeleton from '@/shared/ui/BarChartSkeleton.vue'

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
  <div class="w-full h-[400px] bg-blue-300">
    <BarChartSkeleton  v-if="isLoading || isError" :isError="isError" :isLoading="isLoading" :chartOption="chartOptions"/>
    <Bar v-else :data="chartData" :options="chartOptions" />
  </div> 
</template>