<script setup lang="ts">
import { computed } from 'vue'
import { Bar, Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'
import type { Sales } from '@/entities/sales/model/types'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

const props = defineProps<{
  data: Sales[] | undefined
  isLoading: boolean
  isError: boolean
}>()

const chartData = computed(() => ({
  labels: props.data?.map(item => item.date) || [],
  datasets: [
    {
      label: 'Скидки',
      backgroundColor: '#193db8',
      data: props.data?.map(item => Number(item.discount_percent)) || [],
    },
    {
      label: 'Доходы (полные)',
      backgroundColor: 'red',
      data: props.data?.map(item => Number(item.total_price)) || [],
    },
    {
      label: 'Доходы со скидкой',
      backgroundColor: '#4ade80',
      data: props.data?.map(item => Number(item.price_with_disc)) || [],
    },
  ],
}))

const pieChartData = computed(() => {
  const totalSupply = props.data?.filter(i => i.is_supply).length ?? 0
  const totalRealization = props.data?.filter(i => i.is_realization).length ?? 0
  return {
    labels: ['Поставки', 'Реализация'],
    datasets: [
      {
        label: 'Типы продаж',
        backgroundColor: ['#6366f1', '#f87171'],
        data: [totalSupply, totalRealization],
      },
    ],
  }
})

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

const pieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Распределение по типу продаж',
    },
  },
}
</script>

<template>
  <div v-if="data?.length" class="w-full h-[400px]">
    <Bar :data="chartData" :options="chartOptions" />
    <Pie :data="pieChartData" :options="pieOptions" />
  </div>
  <p v-else-if="isLoading">Загрузка графика...</p>
  <p v-else-if="isError">Ошибка загрузки графика</p>
</template>