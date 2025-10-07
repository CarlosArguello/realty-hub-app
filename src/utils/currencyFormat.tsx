const currencyFormat = (value: number): string => {
  if (!value) return ""
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  })
}

export const currencyToNumber = (currency: string): number | null => {
  const digits = currency.replace(/\D/g, "")
  return digits ? Number(digits) : null
}

export default currencyFormat
