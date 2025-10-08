import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getPropertyById } from "./api" // Importa la API local de la feature

export const usePropertyDetails = () => {
  const { id } = useParams<{ id: string }>()

  const queryResult = useQuery({
    queryKey: ["property-details", id],
    queryFn: async () => await getPropertyById(id as string),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: !!id
  })

  return {
    property: queryResult.data,
    isLoading: queryResult.isLoading,
    isError: queryResult.isError
  }
}
