import { useState, useContext, useEffect } from "react";
import { InfoContext } from "../context/InfoContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const RegisterPage = () => {
  const { registers } = useLoaderData();
  const navegate = useNavigate();
  const { setInfoKey } = useContext(InfoContext);
  
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageState, setPageState] = useState(10);
  const [optionOrder, setOptionOrder] = useState("A-Z");
  const [dataWithIds, setDataWithIds] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const dataWithIdsArray = Object.keys(registers).map((id) => ({
      id,
      ...registers[id],
    }));
    setDataWithIds(dataWithIdsArray);
  }, [registers]);

  useEffect(() => {
    const total = Math.ceil(dataWithIds.length / pageState);
    setTotalPages(total);
  }, [dataWithIds, pageState]);

  const handleChangePage = (e) => {
    const newPageState = parseInt(e.target.value, 10);
    setPageState(newPageState);
    setCurrentPage(0);
  };

  const sortData = (data, order) => {
    if (order === "Nombre") {
      return data.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (order === "Apellido") {
      return data.sort((a, b) => a.apellido.localeCompare(b.apellido));
    } else if (order === "Estado") {
      return data.sort((a, b) => a.estado.localeCompare(b.estado));
    }
    return data;
  };

  const filterRegisters = () => {
    const sortedData = sortData(dataWithIds, optionOrder);
    const startIndex = currentPage * pageState;
    const endIndex = startIndex + pageState;

    if (search.length > 0) {
      const filteredResults = sortedData.filter((record) => {
        return (
          record.nombre.toLowerCase().includes(search) ||
          record.apellido.toLowerCase().includes(search) ||
          record.id.toLowerCase().includes(search)
        );
      });
      return filteredResults.slice(startIndex, endIndex);
    } else {
      return sortedData.slice(startIndex, endIndex);
    }
  };

  const searchChange = (e) => {
    setCurrentPage(0);
    setSearch(e.target.value);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previewPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const selectOption = (infoKey) => {
    setInfoKey(infoKey);
    navegate("/details");
  };

  const handleChange = (e) => {
    setOptionOrder(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="text-center py-2">
          <h1 className="parrafo-paises">Registros</h1>
        </div>
        
        <form className="mt-2 d-flex justify-content-center" role="search">
          <input
            className="form-control me-2 w-50 focus-ring focus-ring-warning border-warning"
            type="search"
            value={search}
            onChange={searchChange}
            placeholder="Busque aquí"
            aria-label="Search"
          />
        </form>

        <div className="my-4 bg-secondary-subtle p-4">
          <div className="d-flex gap-3 h-100 p-2 justify-content-end align-items-center">
            <div className="d-flex align-items-center">
              <p className="fw-semibold">Ordenar</p>
            </div>
            <div>
              <select
                id="order"
                name="type"
                aria-label="type"
                onChange={handleChange}
                className="form-select focus-ring focus-ring-warning border-0"
              >
                <option value="Nombre" defaultValue>
                  Elija una opción
                </option>
                <option value="Nombre">Nombre</option>
                <option value="Apellido">Apellido</option>
                <option value="Estado">Estado</option>
              </select>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Celular</th>
                <th>Estado</th>
              </tr>
            </thead>
            {filterRegisters().map((infoKey, index) => (
              <tbody key={index} onClick={() => selectOption(infoKey.id)} className="pointer">
                <tr>
                  <td>{infoKey.id}</td>
                  <td>{infoKey.nombre}</td>
                  <td>{infoKey.apellido}</td>
                  <td>{infoKey.celular}</td>
                  <td>{infoKey.estado}</td>
                </tr>
              </tbody>
            ))}
          </table>
          
          <div className="d-flex gap-3 h-100 p-2 justify-content-end align-items-center">
            <div className="d-flex align-items-center">
              <p className="fw-semibold">filas por pagina</p>
            </div>
            <div>
              <select
                className="form-select focus-ring focus-ring-warning border-0"
                name="type"
                aria-label="type"
                onChange={handleChangePage}
              >
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </div>
            <div className="d-flex container__pagination">
              <Pagination
                previewPage={previewPage} 
                currentPage={currentPage}
                totalPages ={totalPages}
                setCurrentPage={setCurrentPage} 
                nextPage={nextPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
