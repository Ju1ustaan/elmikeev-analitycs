import { useQuery } from '@tanstack/vue-query'
import { fetchIncomes } from './api'
import type { Ref } from 'vue'

type SalesParams = {
  page?: number
  limit?: string
  dateFrom?: string
  dateTo?: string
}

export const useIncomes = (params: Ref<SalesParams>) => {
  return useQuery({
    queryKey: ['sales', params],
    queryFn: () => fetchIncomes(params.value),
  })
}