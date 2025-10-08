import { describe, it, expect } from "vitest"
import currencyFormat, { currencyToNumber } from "../currencyFormat"

describe("currencyFormat", () => {
  it("format Number to Currency", () => {
    expect(currencyFormat(12_5000_000)).toMatch(/^\$\s?125\.000\.000$/)
  })

  it("parse Currency to Number", () => {
    expect(currencyToNumber("$ 125.000.000")).toBe(12_5000_000)
  })

  it("maneja undefined", () => {
    expect(currencyFormat(undefined)).toBe("")
  })
})
