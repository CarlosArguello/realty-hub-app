// src/components/VisibleMarker.tsx
import { useEffect, useRef } from "react"

type Props = {
  onVisible: () => void
  disabled?: boolean
  offset?: number
  threshold?: number
}

export default function VisibleMarker({
  onVisible,
  disabled = false,
  offset = 0,
  threshold = 0
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || disabled) return

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting
        if (isVisible) onVisible()
      },
      { root: null, rootMargin: `${offset}px 0px`, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled])

  // si deshabilitas y vuelves a habilitar, permite disparar otra vez cuando once=true

  return <div ref={ref} />
}
