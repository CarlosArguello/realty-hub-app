import { useState } from "react"
import type { PropertyFilters } from "../../types/property"
import { Field, FieldCurrency } from "../../common/Form"

type PropertyFiltersProps = {
  values?: Partial<PropertyFilters>
  onChangeValues: (vals: Partial<PropertyFilters>) => void
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ values, onChangeValues }) => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <Field
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={({ target }) => {
          setName(target.value)
          if (target.value?.length >= 3 || target?.value?.length === 0)
            onChangeValues({ ...values, name: target.value })
        }}
      />

      <Field
        type="text"
        placeholder="Dirección"
        value={address}
        onChange={({ target }) => {
          setAddress(target.value)
          if (target.value?.length >= 3 || target?.value?.length === 0)
            onChangeValues({ ...values, address: target.value })
        }}
      />

      <FieldCurrency
        value={minPrice}
        placeholder="Precio minimo"
        onChange={(price) => {
          const newMinPrice = price ?? 0
          setMinPrice(newMinPrice)
          if (newMinPrice >= 1000 || !newMinPrice)
            onChangeValues({ ...values, minPrice: newMinPrice ? Number(newMinPrice) : undefined })
        }}
      />

      <FieldCurrency
        placeholder="Precio maximo"
        value={maxPrice}
        onChange={(price) => {
          const newMaxPrice = price ?? 0
          setMaxPrice(newMaxPrice)
          if ((newMaxPrice > 1000 && newMaxPrice > (values?.minPrice || 0)) || newMaxPrice === 0)
            onChangeValues({ ...values, maxPrice: newMaxPrice ? Number(newMaxPrice) : undefined })
        }}
      />
    </div>
  )
}

export default PropertyFilters
