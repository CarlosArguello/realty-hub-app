import type { Property } from "../../../entities/property"
import SmartImage from "../../../common/ui/SmartImage"
import currencyFormat from "../../../common/utils/currencyFormat"
import { generatePath, Link } from "react-router-dom"
import routePaths from "../../../routes/routePaths"

type PropertyCardProps = {
  property: Property
  highPriority?: boolean
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, highPriority = false }) => {
  return (
    <Link to={generatePath(routePaths.properties.details, { id: property?.code })}>
      <article
        data-testid="card"
        className="group overflow-hidden bg-white border-b-1 border-b-slate-100 pb-3"
      >
        <div className="relative h-110 rounded-md overflow-hidden">
          <SmartImage
            src={`${property.fileUrl}?w=330&ar=3:5&fit=crop&fm=webp&q=50`}
            priority={highPriority ? "high" : "lazy"}
            className="group-hover:scale-105"
          />
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:underline">
            {property.name}
          </h3>

          <p className="mt-1 font-normal text-slate-600">{property.address}</p>

          <div className="mt-2 flex justify-end">
            <span className="font-bold text-slate-900" data-testid="price">
              {currencyFormat(property.price)}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PropertyCard
