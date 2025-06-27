import { api } from '@/shared/api'
import type { Income, PaginationLinks, PaginationMeta } from './types'


export const fetchIncomes = async (params: { page?: number; dateFrom?: string; dateTo?: string; limit?: string }) => {
  const response = await api.get<{
    data: Income[]
    meta: PaginationMeta
    links: PaginationLinks
  }>('/incomes', {
    params,
  })

  return {
    data: response.data.data,
    meta: response.data.meta,
    links: response.data.links,
  }
}
