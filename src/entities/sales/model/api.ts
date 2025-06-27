import { api } from '@/shared/api'
import type { Sales, PaginationLinks, PaginationMeta } from './types'


export const fetchSales = async (params: { page?: number; dateFrom?: string; dateTo?: string; limit?: string }) => {
  const response = await api.get<{
    data: Sales[]
    meta: PaginationMeta
    links: PaginationLinks
  }>('/sales', {
    params,
  })

  return {
    data: response.data.data,
    meta: response.data.meta,
    links: response.data.links,
  }
}
