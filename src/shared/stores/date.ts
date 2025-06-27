import { ref } from 'vue'
import { defineStore } from 'pinia'

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

export const useDateStore = defineStore('date', () => {
  
  const today = new Date()
  const date = ref<string>(formatDate(today))
   function changeDate(newDate: string) {
    date.value = newDate
  }

  return { date, changeDate }
})