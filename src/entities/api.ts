export type PageResult<T> = {
  items: T[]
  total: number
} & Pagination

export type Pagination = {
  pageSize: number
  page: number
}
