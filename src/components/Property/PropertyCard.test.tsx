import { MemoryRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import PropertyCard from "./PropertyCard"
import { Property } from "../../types/property"
import { expect, it } from "vitest"
import currencyFormat from "../../utils/currencyFormat"

const property: Property = {
  code: "123",
  name: "Apto Laureles",
  address: "Medellín",
  price: 310000000,
  year: 2020,
  fileUrl: "/x.jpg"
}

it("render PropertyCard", () => {
  render(<PropertyCard property={property} />, {
    wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>
  })

  const name = screen.getByText(property.name)
  const address = screen.getByText(property.address)
  const price = screen.getByTestId("price")
  const link = screen.getByRole("link")

  expect(name).toBeInTheDocument()
  expect(address).toBeInTheDocument()
  expect(price.textContent).toBe(currencyFormat(property.price))
  expect(link).toHaveAttribute("href", `/${property.code}`)
})
