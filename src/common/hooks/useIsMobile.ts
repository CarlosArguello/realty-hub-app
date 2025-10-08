// @common/hooks/useDeviceType.ts

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = "(max-width: 767px)"

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") return window.matchMedia(MOBILE_BREAKPOINT).matches
    return false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT)

    const listener = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", listener)

    return () => {
      mediaQuery.removeEventListener("change", listener)
    }
  }, [])

  return isMobile
}
