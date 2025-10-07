import { BrowserRouter, Route, Routes } from "react-router-dom"
import routePaths from "./routePaths"
// import Property from "../components/Property/Property"
import { lazy, Suspense } from "react"
import PropertyDetails from "../components/PropertyDetails/PropertyDetails"
const Property = lazy(() => import("../components/Property/Property"))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Cargando...</>}>
        <Routes>
          <Route path={routePaths.properties.root} element={<Property />} />
          <Route path={routePaths.properties.details} element={<PropertyDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
