import type { PageResult, Pagination } from "../types/api"
import type { Property, PropertyDetails, PropertyFilters } from "../types/property"
import http from "./http"

export const getProperties = async (filters: PropertyFilters & Pagination) => {
  const result = await http.get<PageResult<Property>>("/properties", { params: filters })
  return result.data
}

export const getPropertyById = async (id: string) => {
  const result = await http.get<PropertyDetails>(`/properties/${id}`)
  return result.data
}
