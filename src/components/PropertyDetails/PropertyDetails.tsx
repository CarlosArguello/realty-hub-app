import { useQuery } from "@tanstack/react-query"
import { Layout } from "../../common/Layout"
import { useParams } from "react-router-dom"
import { getPropertyById } from "../../api/propertiesApi"
import SmartImage from "../../common/SmartImage"
import PropertyDetailsSection from "./PropertyDetailsSection"
import PropertyDetailsSectionSkeleton from "./PropertyDetailsSectionSkeleton"

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data: property, isLoading } = useQuery({
    queryKey: ["property-details", id],
    queryFn: async () => await getPropertyById(id as string),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: !!id
  })

  if (!property?.id) return null

  return (
    <Layout>
      <div className="w-full flex gap-x-10 ">
        <div className="w-5/12 rounded-lg overflow-hidden">
          <SmartImage
            priority="high"
            src={`${property.images.file}?w=550&ar=4:5&fit=crop&fm=webp`}
          />
        </div>
        <div className="w-6/12 py-5">
          {isLoading ? (
            <PropertyDetailsSectionSkeleton />
          ) : (
            <PropertyDetailsSection {...property} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default PropertyDetails
