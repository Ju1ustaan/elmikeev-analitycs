export type Stock = {
  barcode: number
  brand: string
  category: string
  date: string 
  discount: string
  in_way_from_client: number | null
  in_way_to_client: number | null
  is_realization: boolean | null
  is_supply: boolean | null
  last_change_date: string | null
  nm_id: number
  price: string 
  quantity: number
  quantity_full: number | null
  sc_code: number
  subject: string
  supplier_article: string
  tech_size: string
  warehouse_name: string
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

export type StockHeader = {
  text: string
  value: keyof Stock
}