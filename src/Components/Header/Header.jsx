import { NavLink } from "react-router-dom";
import "../Header/Header.css";

function Header() {
  return (
    <div className="styleHeaderCommon">
      <nav id="sideBar">
        <NavLink
          to="/"
          href="/"
          reloadDocument
          className={({ isActive }) =>
            isActive ? "navActiveHome" : "styleHeaderNavBar"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/a-propos"
          href="/a-propos"
          reloadDocument
          className={({ isActive }) =>
            isActive ? "navActiveAbout" : "styleHeaderNavBar"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
