import { render, screen } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import * as api from "../api"
import { Property as PropertyType } from "@entities/property"
import { expect, it, vi } from "vitest"
import Property from "../PropertyList"
import pageResultMock from "@common/test/mocks/pageResultMock"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import routePaths from "@routes/routePaths"

const createProperty = (code: string) => ({
  code,
  name: "Home",
  address: "Cll 22",
  price: 740000000,
  year: 2025,
  fileUrl: "/a.jpg"
})

const properties: PropertyType[] = [createProperty("001"), createProperty("002")]
vi.spyOn(api, "getProperties").mockResolvedValue(pageResultMock(properties))

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

  const cards = await screen.findAllByTestId("card")
  expect(cards).toHaveLength(properties.length)

  expect(api.getProperties).toBeCalled()
})
