import { PageResult } from "@entities/api"

const pageResultMock = <T>(
  items: T[] = [],
  options: Partial<Omit<PageResult<T>, "items">> = {}
): PageResult<T> => {
  const { page = 1, pageSize = items.length || 6, total = items.length } = options

  return { items, page, pageSize, total }
}

export default pageResultMock
