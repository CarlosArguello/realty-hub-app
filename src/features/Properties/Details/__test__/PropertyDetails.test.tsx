import { render, screen, waitFor } from "@testing-library/react"
import { generatePath, MemoryRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import * as api from "../api"
import { PropertyDetailImage, PropertyDetailOwner } from "@entities/property"
import { expect, it, vi } from "vitest"
import PropertyDetails from "../PropertyDetails"
import routePaths from "@routes/routePaths"

const propDetails = {
  code: "002",
  name: "Casa",
  address: "Cll 12",
  year: 2025,
  owner: { name: "Ana Pérez" } as PropertyDetailOwner,
  price: 740000000,
  images: { file: "/a.jpg" } as PropertyDetailImage
}

vi.spyOn(api, "getPropertyById").mockResolvedValue(propDetails)

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>
    <MemoryRouter
      initialEntries={[generatePath(routePaths.properties.details, { id: propDetails?.code })]}
    >
      <Routes>
        <Route path={routePaths.properties.details} element={children} />
      </Routes>
    </MemoryRouter>
  </QueryClientProvider>
)

it("render PropertyDetails", async () => {
  render(<PropertyDetails />, { wrapper })
  await waitFor(() => expect(screen.getByText(propDetails.name)).toBeInTheDocument())
  expect(api.getPropertyById).toHaveBeenCalledWith(propDetails.code)
})
