import { render, screen } from "@testing-library/react"
import { PropertyDetailImage, PropertyDetailOwner, PropertyDetails } from "@entities/property"
import { expect, it } from "vitest"
import PropertyDetailsSection from "../PropertyDetailsSection"
import currencyFormat from "@common/utils/currencyFormat"

const details: PropertyDetails = {
  code: "001",
  name: "Townhouse",
  address: "Sabaneta",
  year: 2021,
  owner: { name: "Ana Pérez" } as PropertyDetailOwner,
  price: 740000000,
  images: { file: "/a.jpg" } as PropertyDetailImage
}

it("render PropertyDetailsSections", () => {
  render(<PropertyDetailsSection {...details} />)

  expect(screen.getByText(details.name)).toBeInTheDocument()
  expect(screen.getByText(details.address)).toBeInTheDocument()
  expect(screen.getByText(details.year)).toBeInTheDocument()
  expect(screen.getByText(details.owner.name)).toBeInTheDocument()

  const price = screen.getByTestId("price")
  expect(price.textContent).toBe(currencyFormat(details.price))
})
