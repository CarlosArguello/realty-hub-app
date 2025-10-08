import SmartImage from "@common/ui/SmartImage"
import PropertyDetailsSection from "./PropertyDetailsSection"
import PropertyDetailsSectionSkeleton from "./PropertyDetailsSectionSkeleton"
import { usePropertyDetails } from "./usePropertyDetails"

const PropertyDetails = () => {
  const { property, isLoading } = usePropertyDetails()

  return (
    <div className="w-full lg:flex gap-x-10 ">
      <div className="w-full lg:w-5/12 rounded-lg overflow-hidden">
        {property?.code && (
          <SmartImage
            priority="high"
            src={`${property.images.file}?w=550&ar=4:5&fit=crop&fm=webp`}
          />
        )}
      </div>
      <div className="lg:w-6/12 py-5">
        {isLoading || !property?.code ? (
          <PropertyDetailsSectionSkeleton />
        ) : (
          <PropertyDetailsSection {...property} />
        )}
      </div>
    </div>
  )
}

export default PropertyDetails
