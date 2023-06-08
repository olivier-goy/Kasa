import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import logo from "../../Assets/LOGO.png";

function Header() {

  return (
    <div className="styleHeaderCommon">
      <img src={logo} alt="Logo de la sociète kasa, le logo est kasa en écriture et le premier a représente une maison" />
      <nav>
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
