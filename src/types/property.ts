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

export type PropertyDetails = {
  id: string
  name: string
  address: string
  price: number
  year: number
  owner: PropertyDetailOwner
  images: PropertyDetailImage
}

export type PropertyDetailOwner = {
  id: string
  name: string
  address?: string
  photo?: string
  birthday?: Date
}

export type PropertyDetailImage = {
  file: string
  enabled: boolean
}
