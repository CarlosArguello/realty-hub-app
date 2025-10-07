import { useEffect, useState } from "react"

export default function useDebounce<T>(value: T) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), 300)
    return () => clearTimeout(id)
  }, [value])
  return debounced
}
