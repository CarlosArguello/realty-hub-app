export type Property = {
  id: string
  name: string
  address: string
  price: number
  year: number
  ownerId: string
  ownerName?: string
  fileUrl?: string
}

export type PropertyFilters = {
  name?: string
  address?: string
  minPrice?: number
  maxPrice?: number
  ownerId?: string
}
