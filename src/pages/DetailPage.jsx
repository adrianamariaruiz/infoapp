import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

const DetailPage = () => {
  const { registers } = useLoaderData();
  const { infoKey } = useContext(InfoContext);

  const handleInputChange = () => {
    console.log("click");
  };

  return (
    <>
      <div className="container pt-4 d-flex flex-column align-items-center">
        <h1 className="text-warning fs-1 fw-bold">Detalles de la informacion</h1>
        <div className="p-4 w-75">
          <form className="card shadow bg-secondary-subtle p-4 d-flex flex-column">
            {Object.entries(registers[infoKey]).map(([key, value], index) => (
              <div key={index}>
                <label htmlFor={key} className="textForm fw-semibold">
                  {key}
                </label>
                <input
                  id={key}
                  className="form-control mb-4 focus-ring focus-ring-warning border-0"
                  name={value}
                  type="text"
                  onChange={handleInputChange}
                  value={value}
                />
              </div>
            ))}
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
