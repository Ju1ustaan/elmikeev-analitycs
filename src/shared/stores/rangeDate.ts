import { ref } from 'vue'
import { defineStore } from 'pinia'

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

export const useRangeDateStore = defineStore('range-date', () => {
  const today = new Date()

  const start = new Date()
  start.setDate(start.getDate() - 7) // ← минус 7 дней

  const startDate = ref<string>(formatDate(start))
  const endDate = ref<string>(formatDate(today))

  function changeStartDate(newDate: string) {
    startDate.value = newDate
  }

  function changeEndDate(newDate: string) {
    endDate.value = newDate
  }

  return {
    startDate,
    endDate,
    changeStartDate,
    changeEndDate,
  }
})
