import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PaginationMeta, PageLink } from '@/entities/stocks/model/types'



export const usePaginationStore = defineStore('pagination', () => {
  const currentPage = ref<number>(1)
  const lastPage = ref(1)
  const perPage = ref<string>('100')
  const total = ref(0)
  const links = ref<PageLink[]>([])

  function setMeta(meta: PaginationMeta) {
    currentPage.value = meta.current_page
    lastPage.value = meta.last_page
    perPage.value = meta.per_page
    total.value = meta.total
    links.value = meta.links || []
  }

  function changePerPage(newPerPage: string ) {
    perPage.value = newPerPage
    currentPage.value = 1 
  }

  return { currentPage, lastPage, perPage, links, total, changePerPage, setMeta }
})
