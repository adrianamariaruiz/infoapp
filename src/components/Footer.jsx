import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="d-flex w-100 bg-dark text-light pt-3 position-absolute end-0 footer__position">
      <div className="container">
        <div className="row d-flex text-center align-items-center justify-content-center">
          <div className="col-12 col-md-4 d-flex gap-2 justify-content-center">
            <img src="src/assets/logo.webp" alt="logo Galapp" className="footer__logo"/>
            <p className="fs-1 text-warning fw-bold">Galápp</p>
          </div>
          <div className="col-12 d-flex gap-2 col-md-4 justify-content-center">
            <p className="fs-5">Síguenos</p>
            <Link to="https://www.instagram.com/galapagoagro/?hl=es-la">
              <img src="src/assets/instagram.svg" alt="instagram" className="footer__icons"/>
            </Link>
            <Link to="https://web.facebook.com/galapagoagro?_rdc=1&_rdr">
              <img src="src/assets/facebook.svg" alt="facebook" className="footer__icons"/>
            </Link>
            <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fgalapagoagro">
              <img src="src/assets/twiter.svg" alt="twiter" className="footer__icons"/>
            </Link>
            <Link to="https://www.linkedin.com/company/galapagoagro/">
              <img src="src/assets/linkedin.svg" alt="linkedIn" className="footer__icons"/>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <p>Servicio al cliente: +57 3504460479</p>
            <p>Ventas: +57 3160232998</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer