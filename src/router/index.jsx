import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";
import PublicRoute from "../routes/PublicRoute";
// import loaderRegisters from "../helpers/FetchData";
import DetailPage from "../pages/DetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/registros",
        element: <RegisterPage />,
        // loader: loaderRegisters
      },
      {
        path: "/details",
        element: <DetailPage />,
        // loader: loaderRegisters
      },
    ],
  },
]);
