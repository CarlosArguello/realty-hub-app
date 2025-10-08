import { useQuery } from "@tanstack/react-query"
import { useNavigate, useParams } from "react-router-dom"
import { getPropertyById } from "./api" // Importa la API local de la feature

export const usePropertyDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const queryResult = useQuery({
    queryKey: ["property-details", id],
    queryFn: async () => await getPropertyById(id as string),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: !!id,
    retry: false
  })

  const isError = queryResult?.isError

  if (isError) navigate("/404")

  return {
    property: queryResult.data,
    isLoading: queryResult.isLoading,
    isError: queryResult.isError
  }
}
