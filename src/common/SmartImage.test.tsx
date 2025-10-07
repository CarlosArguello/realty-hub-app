import { act, render, screen } from "@testing-library/react"
import SmartImage from "./SmartImage"
import { vi, it, expect } from "vitest"

it("work high priority", () => {
  render(<SmartImage src="/img.jpg" alt="high" priority="high" />)
  const img = screen.getByRole("img", { name: /high/i })
  expect(img).toHaveAttribute("loading", "eager")
  expect(img).toHaveAttribute("fetchpriority", "high")
})

it("work lazy priority", () => {
  render(<SmartImage src="/img.jpg" alt="lazy" priority="lazy" />)
  const img = screen.getByRole("img", { name: /lazy/i })
  expect(img).toHaveAttribute("loading", "lazy")
  expect(img).toHaveAttribute("fetchpriority", "low")
})

it("show skeleton & fade on load", async () => {
  vi.useFakeTimers()
  render(<SmartImage src="/img.jpg" alt="x" />)

  const img = screen.getByRole("img", { name: /x/i })
  const skeleton = screen.getByTestId("skeleton")

  expect(img.className).toMatch(/opacity-0/)

  expect(skeleton).toBeInTheDocument()

  act(() => {
    img.dispatchEvent(new Event("load"))
    vi.advanceTimersByTime(500)
  })

  vi.useRealTimers()
  expect(img.className).toMatch(/opacity-100/)
})
