import {
  BsFillJournalBookmarkFill,
  BsGeoAlt,
  BsPencilSquare,
  BsPeople,
  BsPersonWalking,
} from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center py-4 gap-5">
        <div className="d-flex flex-column align-items-center text-center">
          <h1 className="text-warning fw-bold home__title">InfoApp</h1>
          <h2>Manejamos la información del usuario</h2>
        </div>

        <div className="d-flex justify-content-center w-100">
          <div className="d-flex flex-column text-center p-2">
            <div className="container d-flex flex-wrap">
              <div className="row">
                <div className="col-4 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
                  <img
                    src="src/assets/cel-image.jpg"
                    alt="infoapp"
                    className="img-fluid img__cel"
                  />
                </div>
                <div className="fs-5 p-2 col-8 col-md-8 col-lg-10">
                  <h2>Quienes somos?</h2>
                  <p>
                    InfoApp está especialmente pensada para las particularidades
                    de su registro, ya que ha sido diseñada por personas que se
                    dedican a gestionar información de los usuarios y conocen
                    las necesidades de cada empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center w-100 px-2 pt-4 home__container--bg">
          <h2>¿Qué obtiene con InfoApp?</h2>
          <div className="fs-5">
            <ul>
              <li>
                Capturar todos los datos de su usuario: nombre, dirección,
                email, telefono, entre otros
              </li>
              <li>Posibilidad de acceso a Analytics</li>
              <li>Soporte</li>
              <ul>
                <li>Via whatsapp técnico remoto</li>
                <li>Tutoriales en youtube</li>
              </ul>
            </ul>
          </div>
          <div className="w-100 d-flex justify-content-center home__container--bg">
            <img
              src="src/assets/infoGalapp.webp"
              alt="infoapp"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center text-center w-100 w-md-40 px-4">
          <div className="">
            <h2>InfoApp RTC</h2>
            <p className="fs-5">
              InfoApp está compuesta por varios módulos de captura donde los
              RTCs pueden ingresar la información directamente en el lugar y
              mediante una app en su celular sin internet.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col col-sm-6 col-md-4 text-primary home__border--container-grid home__container--grid p-2">
                <BsFillJournalBookmarkFill className="mx-2 my-2 image-size text-dark p-2 border border-primary border-4" />
                <p className="fw-semibold">Personal:</p>
                <p>a quién visitó</p>
              </div>

              <div className="col col-sm-6 col-md-4 text-danger home__border--container-grid home__container--grid p-2">
                <BsGeoAlt className="mx-2 my-2 image-size text-dark p-2 border border-danger border-4" />
                <p className="fw-semibold">Ubicación:</p>
                <p>información del lugar visitado</p>
              </div>

              <div className="col col-sm-6 col-md-4 text-primary home__border--container-grid home__container--grid p-2">
                <BsPersonWalking className="mx-2 my-2 image-size text-dark p-2 border border-warning border-4" />
                <p className="fw-semibold">Visita negocio:</p>
                <p>
                  visitas realizadas, estado actual del la información y
                  recomendaciones propuestas
                </p>
              </div>

              <div className="col col-sm-6 col-md-4 text-danger home__border--container-grid home__container--grid p-2">
                <img
                  src="src/assets/mostrador.png"
                  alt="visita mostrador"
                  className="mx-2 my-2 image-size text-dark p-2 border border-warning border-4"
                />
                <p className="fw-semibold">Visita mostrador:</p>
                <p>
                  visitas a cada tienda de insumos, objetivo y duración de la
                  visita
                </p>
              </div>

              <div className="col col-sm-6 col-md-4 text-primary home__border--container-grid home__container--grid p-2">
                <BsPeople className="mx-2 my-2 image-size text-dark p-2 border border-success border-4" />
                <p className="fw-semibold">Formación grupal:</p>
                <p>eventos grupales, capacitaciones, asistentes</p>
              </div>

              <div className="col col-sm-6 col-md-4 text-danger home__border--container-grid home__container--grid p-2">
                <BsPencilSquare className="mx-2 my-2 image-size text-dark p-2 border border-primary border-4" />
                <p className="fw-semibold">Tareas administrativas:</p>
                <p>
                  otras labores como generación de informes, mantenimiento, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
