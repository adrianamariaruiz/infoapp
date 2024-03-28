import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex w-100 bg-dark text-light pt-3 position-absolute end-0 footer__position">
      <div className="container">
        <div className="row d-flex text-center align-items-center justify-content-center">
          <div className="col-12 col-md-4 d-flex gap-2 justify-content-center">
            <p className="fs-1 text-warning fw-bold">InfoApp</p>
          </div>
          <div className="col-12 d-flex gap-2 col-md-4 justify-content-center">
            <p className="fs-5">Síguenos</p>
            <Link to="https://www.instagram.com">
              <img
                src="/assets/instagram.svg"
                alt="instagram"
                className="footer__icons"
              />
            </Link>
            <Link to="https://web.facebook.com">
              <img
                src="/assets/facebook.svg"
                alt="facebook"
                className="footer__icons"
              />
            </Link>
            <Link to="https://twitter.com">
              <img
                src="/assets/twiter.svg"
                alt="twiter"
                className="footer__icons"
              />
            </Link>
            <Link to="https://www.linkedin.com">
              <img
                src="/assets/linkedin.svg"
                alt="linkedIn"
                className="footer__icons"
              />
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <p>Servicio al cliente: +57 1231231231</p>
            <p>Ventas: +57 1231231231</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
