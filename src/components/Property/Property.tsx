import { useInfiniteQuery } from "@tanstack/react-query"
import { getProperties } from "../../api/propertiesApi"
import PropertyCard from "./PropertyCard"
import PropertyCardSkeleton from "./PropertyCardSkeleton"
import VisibleMarker from "../../common/VisibleMarker"
import Layout from "../../common/Layout"

const Property = () => {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["properties"],
    queryFn: async ({ pageParam }) => await getProperties({ page: pageParam, pageSize: 6 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page * lastPage.pageSize < lastPage.total) return lastPage.page + 1
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false
  })

  const properties = data?.pages.flatMap((page) => page.items)

  return (
    <Layout>
      <div className="max-w-10/12 mx-auto px-4 min-h-screen">
        <h1 className="text-2xl font-bold">Propiedades disponibles:</h1>
        <div className="grid grid-cols-3 gap-x-20 gap-y-10 mt-5">
          {properties?.map((property, index) => (
            <PropertyCard key={property.id} property={property} highPriority={index <= 3} />
          ))}

          {isLoading && Array.from({ length: 3 }).map(() => <PropertyCardSkeleton />)}

          <VisibleMarker
            offset={400}
            onVisible={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          ></VisibleMarker>
        </div>
      </div>
    </Layout>
  )
}

export default Property
