import { useMemo, useState } from "react"

type SmartImageProps = {
  src: string
  alt?: string
  priority?: "high" | "lazy"
  className?: string
}

const SmartImage: React.FC<SmartImageProps> = ({
  priority = "lazy",
  src,
  alt = "",
  className = ""
}) => {
  const [isLoadedImage, setIsLoadedImage] = useState(false)

  const highPriority = useMemo(() => priority === "high", [priority])

  return (
    <>
      <img
        src={src}
        loading={highPriority ? "eager" : "lazy"}
        decoding={highPriority ? "auto" : "async"}
        fetchPriority={highPriority ? "high" : "low"}
        onLoad={() => setTimeout(() => setIsLoadedImage(true), 400)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoadedImage ? "opacity-100" : "opacity-0"
        } ${className}`}
        alt={alt}
      />

      {!isLoadedImage && (
        <div className="animate-pulse w-full h-full bg-gray-200 opacity-70 absolute left-0 top-0 z-2" />
      )}
    </>
  )
}

export default SmartImage
