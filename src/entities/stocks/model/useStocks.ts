import { useQuery } from '@tanstack/vue-query'
import { fetchStocks } from './api'
import type { Ref } from 'vue'

type StocksParams = {
  page?: number
  limit?: string
  dateFrom?: string
}

export const useStocks = (params: Ref<StocksParams>) => {
  return useQuery({
    queryKey: ['stocks', params],
    queryFn: () => fetchStocks(params.value),
  })
}