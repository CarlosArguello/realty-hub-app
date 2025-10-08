import { useEffect, useState } from "react"

const useDebounce = <T>(value: T) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), 300)
    return () => clearTimeout(id)
  }, [value])

  return debounced
}

export default useDebounce
