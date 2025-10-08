import http from "@common/lib/http"
import { PageResult, Pagination } from "@entities/api"
import { Property, PropertyFilters } from "@entities/property"

export const getProperties = async (filters: PropertyFilters & Pagination) => {
  const result = await http.get<PageResult<Property>>("/properties", { params: filters })
  return result.data
}
