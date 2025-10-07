import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import * as api from "../../api/propertiesApi"
import { Property as PropertyType } from "../../types/property"
import { expect, it, vi } from "vitest"
import Property from "./Property"
import pageResultMock from "../../test/mocks/pageResultMock"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import routePaths from "../../routes/routePaths"

const property = {
  code: "003",
  name: "Home",
  address: "Cll 22",
  price: 740000000,
  year: 2025,
  fileUrl: "/a.jpg"
}

const properties: PropertyType[] = [property, property]
vi.spyOn(api, "getProperties").mockResolvedValue(pageResultMock(properties))

const CardMock = vi.hoisted(() => vi.fn(() => <div data-testid="card-mock" />))
vi.mock("./PropertyCard", () => ({ __esModule: true, default: CardMock }))

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>
    <MemoryRouter initialEntries={[routePaths.properties.root]}>
      <Routes>
        <Route path={routePaths.properties.root} element={children} />
      </Routes>
    </MemoryRouter>
  </QueryClientProvider>
)

it("render Property", async () => {
  render(<Property />, { wrapper })

  const cards = await screen.findAllByTestId("card-mock")
  expect(cards).toHaveLength(properties.length)

  expect(CardMock).toHaveBeenCalledTimes(properties.length)

  expect(api.getProperties).toBeCalled()
})
