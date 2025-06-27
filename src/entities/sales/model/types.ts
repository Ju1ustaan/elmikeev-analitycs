export type Sales = {
    g_number: string,
    date: string,
    last_change_date: string,
    supplier_article: string,
    tech_size: string,
    barcode: number,
    total_price: string,
    discount_percent: string,
    is_supply: boolean,
    is_realization: boolean,
    promo_code_discount: string | null,
    warehouse_name: string,
    country_name: string,
    oblast_okrug_name: string,
    region_name: string,
    income_id: number,
    sale_id: string,
    odid: string | null,
    spp: string,
    for_pay: string,
    finished_price: string,
    price_with_disc: string,
    nm_id: number,
    subject: string,
    category: string,
    brand: string,
    is_storno: string | null
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

export type SalesHeader = {
  text: string
  value: keyof Sales
}