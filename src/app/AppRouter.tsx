import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import routePaths from "../routes/routePaths"
import { lazy, Suspense } from "react"
import Loader from "@common/ui/Loader"
import NotFoundPage from "@pages/NotFoundPage"
const PropertiesListPage = lazy(() => import("@pages/PropertiesListPage"))
const PropertyDetails = lazy(() => import("@pages/PropertyDetailsPage"))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={routePaths.root}
            element={<Navigate to={routePaths.properties.root} replace />}
          />
          <Route path={routePaths.properties.root} element={<PropertiesListPage />} />
          <Route path={routePaths.properties.details} element={<PropertyDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
