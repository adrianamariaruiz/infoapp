import { Link, useRouteError } from "react-router-dom"

const NotFound = () => {
    const error = useRouteError()
    
    return (
    <div className="m-4">
      <h1>404</h1>
      <h2 className="text-danger">La página no existe</h2>
      <h4>{error.statusText || error.message}</h4>
      <Link to="/" className="fs-5">Volver al Inicio</Link>
    </div>
  )
}

export default NotFound