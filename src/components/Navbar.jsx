import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark py-3">
      <div className="container d-flex align-items-center">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              : isActive
              ? "link-warning link-offset-2 link-underline-opacity-25"
              : "link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          }
        >
          <img
            src="src/assets/logo.webp"
            alt="logo"
            className="pe-3 navbar__icon"
          />
          Inicio
        </NavLink>
        <NavLink
          to="/registros"
          className={({ isActive, isPending }) =>
            isPending
              ? "link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              : isActive
              ? "link-warning link-offset-2 link-underline-opacity-25"
              : "link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            fill="currentColor"
            className="mx-2"
          >
            <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          Registros
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
