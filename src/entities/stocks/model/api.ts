import { api } from '@/shared/api'
import type { Stock, PaginationLinks, PaginationMeta } from './types'
import { useDateStore } from '@/shared/stores/date';

const dateStore = useDateStore()
export const fetchStocks = async (params: { page?: number; dateFrom?: string; limit?: string }) => {
  const response = await api.get<{
    data: Stock[]
    meta: PaginationMeta
    links: PaginationLinks
  }>('/stocks', {
    params,
  })

  return {
    data: response.data.data,
    meta: response.data.meta,
    links: response.data.links,
  }
}
