import { NavLink } from "react-router-dom";
import { BsFillHouseFill, BsFillJournalBookmarkFill } from "react-icons/bs";

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
          <BsFillHouseFill className="mx-2 navbar__icon" />
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
          <BsFillJournalBookmarkFill className="mx-2 navbar__icon" />
          Registros
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
