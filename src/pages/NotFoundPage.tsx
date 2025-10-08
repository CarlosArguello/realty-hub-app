import { Layout } from "@common/ui/Layout"
import routePaths from "@routes/routePaths"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[75vh] text-center p-4">
        <h1 className="text-9xl font-extrabold text-gray-900">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4 mb-2">Página no Encontrada</p>
        <p className="text-gray-500 mb-6">La ruta a la que intentas acceder no existe.</p>
        <Link
          to={routePaths.properties.root}
          className="px-6 py-3 bg-black  hover:bg-gray-700 text-white rounded-lg transition duration-150"
        >
          Volver al Inicio
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
