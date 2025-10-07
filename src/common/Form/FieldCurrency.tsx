// src/components/ui/CurrencyInputCOP.tsx
import { useEffect, useState } from "react"
import currencyFormat, { currencyToNumber } from "../../utils/currencyFormat"
import Field, { type FieldProps } from "./Field"

type FieldCurrencyProps = Omit<
  FieldProps,
  "type" | "value" | "onChange" | "onFocus" | "onDrop" | "onPaste"
> & {
  value: number | null
  onChange: (currency: number | null) => void
}

const getOnlyDigits = (s: string) => s.replace(/\D+/g, "")

const FieldCurrency = ({ value, onChange, ...allProps }: FieldCurrencyProps) => {
  const [textValue, setTextValue] = useState(value != null ? currencyFormat(value) : "")

  useEffect(() => {
    setTextValue(value != null ? currencyFormat(value) : "")
  }, [value])

  return (
    <Field
      type="text"
      value={textValue}
      onChange={({ target }) => {
        const value = getOnlyDigits(target.value)
        onChange(currencyToNumber(value))
        setTextValue(value)
      }}
      onFocus={() => setTextValue(value ? String(value) : "")}
      onBlur={() => setTextValue(value ? currencyFormat(value) : "")}
      onDrop={(e) => e.preventDefault()}
      onPaste={(e) => e.preventDefault()}
      inputMode="numeric"
      autoComplete="off"
      {...allProps}
      //   className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none tabular-nums"
    />
  )
}

export default FieldCurrency
