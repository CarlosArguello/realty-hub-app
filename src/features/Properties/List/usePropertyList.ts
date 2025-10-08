import { useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import useDebounce from "@common/hooks/useDebounce"
import { getProperties } from "./api"
import type { PropertyFilters as PropertyFiltersType } from "@entities/property"

export const usePropertyList = () => {
  const [filters, setFilters] = useState<Partial<PropertyFiltersType>>({})
  const debouncedFilters = useDebounce(filters)

  const queryResult = useInfiniteQuery({
    queryKey: ["properties", debouncedFilters],
    queryFn: async ({ pageParam }) =>
      await getProperties({ page: pageParam, pageSize: 6, ...debouncedFilters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page * lastPage.pageSize < lastPage.total) return lastPage.page + 1
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false
  })

  const properties = queryResult.data?.pages.flatMap((page) => page.items)

  return {
    properties,
    filters,
    setFilters,
    isLoading: queryResult.isLoading,
    hasNextPage: queryResult.hasNextPage,
    isFetchingNextPage: queryResult.isFetchingNextPage,
    fetchNextPage: queryResult.fetchNextPage
  }
}
