import { useQuery } from '@tanstack/vue-query'
import { fetchOrders } from './api'
import type { Ref } from 'vue'

type OrdersParams = {
  page?: number
  limit?: string
  dateFrom?: string
  dateTo?: string
}

export const useOrders = (params: Ref<OrdersParams>) => {
  return useQuery({
    queryKey: ['orders', params],
    queryFn: () => fetchOrders(params.value),
  })
}