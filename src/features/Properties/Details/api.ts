import http from "@common/lib/http"
import type { PropertyDetails } from "@entities/property"

export const getPropertyById = async (id: string) => {
  const result = await http.get<PropertyDetails>(`/properties/${id}`)
  return result.data
}
