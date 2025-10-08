import { BrowserRouter, Route, Routes } from "react-router-dom"
import routePaths from "../routes/routePaths"
import { lazy, Suspense } from "react"
import Loader from "@common/ui/Loader"
const PropertiesListPage = lazy(() => import("@pages/PropertiesListPage"))
const PropertyDetails = lazy(() => import("@pages/PropertyDetailsPage"))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={routePaths.properties.root} element={<PropertiesListPage />} />
          <Route path={routePaths.properties.details} element={<PropertyDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
