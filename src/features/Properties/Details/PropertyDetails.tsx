import SmartImage from "@common/ui/SmartImage"
import PropertyDetailsSection from "./PropertyDetailsSection"
import PropertyDetailsSectionSkeleton from "./PropertyDetailsSectionSkeleton"
import { usePropertyDetails } from "./usePropertyDetails"
import { useIsMobile } from "@common/hooks/useIsMobile"

const PropertyDetails = () => {
  const isMobile = useIsMobile()
  const { property, isLoading } = usePropertyDetails()

  const propsImage = isMobile ? "w=300&ar=4:5&fit=crop&fm=webp" : "w=550&ar=4:5&fit=crop&fm=webp"

  return (
    <div className="w-full lg:flex gap-x-10 ">
      <div
        className="w-full lg:w-5/12 rounded-lg overflow-hidden"
        style={{ height: isMobile ? 450 : "auto" }}
      >
        {property?.code && (
          <SmartImage priority="high" src={`${property.images.file}?${propsImage}`} />
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
