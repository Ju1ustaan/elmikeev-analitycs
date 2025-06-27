export type Orders = {
  g_number: string
  date: string
  last_change_date: string
  supplier_article: string
  tech_size: string
  barcode: number
  total_price: string
  discount_percent: number
  warehouse_name: string
  oblast: string
  income_id: number
  odid: string
  nm_id: number
  subject: string
  category: string
  brand: string
  is_cancel: boolean
  cancel_dt: string | null
}

export type OrdersHeader = {
  text: string
  value: keyof Orders
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