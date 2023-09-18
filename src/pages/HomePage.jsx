
const HomePage = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center py-4 gap-5">
        <div className="d-flex flex-column align-items-center text-center">
          <h1 className="text-warning fw-bold home__title">Galápp</h1>
          <h2 >Cultivamos la información del campo</h2>
        </div>

        <div className="d-flex justify-content-center w-100">
          <div className="d-flex flex-column text-center w-50 p-2">
            <div className="container d-flex">
              <div className="row">
                <div className="col-12 col-md-4">
                  <img
                    src="src/assets/galapp.webp"
                    alt="galapp"
                    className="img-fluid"
                    />
                </div>
                <div className="fs-5 pt-2 col-12 col-md-8">
                  <h2>Quienes somos?</h2>
                  <p>
                    Galápago Agroconsultores es un CRM busca transformar el agro a
                    partir del uso de los datos y la toma informada de decisiones.
                  </p>
                  <p>
                    Galápp está especialmente pensada para las particularidades de
                    su cultivo, ya que ha sido diseñada por gente del campo para
                    gente como usted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center w-100 px-2 pt-4 home__container--bg">
          <h2>¿Qué obtiene con Galápp?</h2>
          <div className="fs-5">
            <ul>
              <li>
                Capturar todos los datos de su finca: cosecha, controles
                sanitarios, ventas, entre otros
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
            <img src="src/assets/infoGalapp.webp" alt="infoGalapp" className="img-fluid"/>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center text-center w-100 px-4">
          <div className="w-50">
            <h2>Galápp RTC</h2>
            <p className="fs-5">
              Galápp está compuesta por varios módulos de captura donde los RTCs
              pueden ingresar la información directamente en campo y mediante una
              app en su celular sin internet.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col col-sm-6 col-md-4 text-primary home__border--container-grid home__container--grid p-2">
                <img src="src/assets/agricultor.webp" alt="agricultor" />
                <p className="fw-semibold">Agricultor:</p>
                <p>a quién visitó</p>
              </div>
              <div className="col col-sm-6 col-md-4 text-danger home__border--container-grid home__container--grid p-2">
                <img src="src/assets/finca.webp" alt="finca" />
                <p className="fw-semibold">Finca:</p>
                <p>información de la finca visitada</p>
              </div>
              <div className="col col-sm-6 col-md-4 text-primary home__border--container-grid home__container--grid p-2">
                <img src="src/assets/visitaFinca.webp" alt="visita finca" />
                <p className="fw-semibold">Visita Finca:</p>
                <p>
                  visitas realizadas, estado actual del cultivo y recomendaciones
                  propuestas
                </p>
             </div>
              <div className="col col-sm-6 col-md-4 text-danger home__border--container-grid home__container--grid p-2">
                <img
                  src="src/assets/visitaMostrador.webp"
                  alt="visita mostrador"
                />
                <p className="fw-semibold">Visita mostrador:</p>
                <p>
                  visitas a cada tienda de insumos, objetivo y duración de la
                  visita
                </p>
              </div>
              <div className="col col-sm-6 col-md-4 text-primary home__border--container-grid home__container--grid p-2">
                <img
                  src="src/assets/formacionGrupal.webp"
                  alt="formación grupal"
                />
                <p className="fw-semibold">Formación grupal:</p>
                <p>eventos grupales, capacitaciones, asistentes</p>
              </div>
              <div className="col col-sm-6 col-md-4 text-danger home__border--container-grid home__container--grid p-2">
                <img src="src/assets/admin.webp" alt="admin" />
                <p className="fw-semibold">Tareas administrativas:</p>
                <p>
                  otras labores como generación de informes, mantenimiento del
                  auto, etc.
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
