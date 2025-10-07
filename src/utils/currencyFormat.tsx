const currencyFormat = (value: number): string => {
  if (!value) return ""
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  })
}

export default currencyFormat
