import type { PageResult, Pagination } from "../types/api"
import type { Property, PropertyFilters } from "../types/property"
import http from "./http"

export const getProperties = async (filters: PropertyFilters & Pagination) => {
  const result = await http.get<PageResult<Property>>("/properties", { params: filters })

  console.log("result", result.data)
  return result.data
}
