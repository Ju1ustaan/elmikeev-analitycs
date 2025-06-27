import { useQuery } from '@tanstack/vue-query'
import { fetchSales } from './api'
import type { Ref } from 'vue'

type SalesParams = {
  page?: number
  limit?: string
  dateFrom?: string
  dateTo?: string
}

export const useSales = (params: Ref<SalesParams>) => {
  return useQuery({
    queryKey: ['sales', params],
    queryFn: () => fetchSales(params.value),
  })
}