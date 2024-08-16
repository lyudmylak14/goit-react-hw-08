import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header>
      <nav className={css.menu}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;