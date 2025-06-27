export type Income = {
  income_id: number
  number: string
  date: string
  last_change_date: string
  supplier_article: string
  tech_size: string
  barcode: number
  quantity: number
  total_price: string
  date_close: string
  warehouse_name: string
  nm_id: number
}


export type PaginationLinks = {
  first: string
  last: string
  next: string | null
  prev: string | null
}

export type PageLink = {
  url: string | null
  label: string
  active: boolean
}

export type PaginationMeta = {
  current_page: number
  from: number
  last_page: number
  links: PageLink[]
  path: string
  per_page: string
  to: number
  total: number
}

export type IncomeHeader = {
  text: string
  value: keyof Income
}