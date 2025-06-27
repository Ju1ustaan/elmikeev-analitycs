import { api } from '@/shared/api'
import type { Orders, PaginationLinks, PaginationMeta } from './types'


export const fetchOrders = async (params: { page?: number; dateFrom?: string; dateTo?: string; limit?: string }) => {
  const response = await api.get<{
    data: Orders[]
    meta: PaginationMeta
    links: PaginationLinks
  }>('/orders', {
    params,
  })

  return {
    data: response.data.data,
    meta: response.data.meta,
    links: response.data.links,
  }
}
