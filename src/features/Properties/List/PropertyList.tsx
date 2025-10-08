import PropertyCard from "./PropertyCard"
import PropertyCardSkeleton from "./PropertyCardSkeleton"
import VisibleMarker from "@common/ui/VisibleMarker"
import PropertyFilters from "./PropertyFilters"
import { usePropertyList } from "./usePropertyList"

const PropertyList = () => {
  const {
    properties,
    filters,
    setFilters,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage
  } = usePropertyList()

  return (
    <div className="max-w-full xl:max-w-11/12 2xl:max-w-10/12 mx-auto px-4 min-h-screen">
      <h1 className="text-2xl font-bold">Propiedades disponibles:</h1>

      <div className="mt-6 mb-8">
        <PropertyFilters values={filters} onChangeValues={setFilters} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">
        {properties?.map((property, index) => (
          <PropertyCard key={property.code} property={property} highPriority={index <= 3} />
        ))}

        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => <PropertyCardSkeleton key={index} />)}

        <VisibleMarker
          offset={400}
          onVisible={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        ></VisibleMarker>
      </div>
    </div>
  )
}

export default PropertyList
