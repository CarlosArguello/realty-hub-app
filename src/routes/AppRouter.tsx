import { BrowserRouter, Route, Routes } from "react-router-dom"
import routePaths from "./routePaths"
import { lazy, Suspense } from "react"
import Loader from "../common/Loader"
const Property = lazy(() => import("../components/Property"))
const PropertyDetails = lazy(() => import("../components/PropertyDetails"))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routePaths.properties.root} element={<Property />} />
          <Route path={routePaths.properties.details} element={<PropertyDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
