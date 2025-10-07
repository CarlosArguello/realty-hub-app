import { BrowserRouter, Route, Routes } from "react-router-dom"
import routePaths from "./routePaths"
// import Property from "../components/Property/Property"
import { lazy, Suspense } from "react"
const Property = lazy(() => import("../components/Property/Property"))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routePaths.properties.root}
          element={
            <Suspense fallback={<>Cargando...</>}>
              <Property />
            </Suspense>
          }
        />
        {/* <Route path={routePaths.properties.root} element={<Property />} /> */}
        {/* <Route path={routePaths.properties} element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
