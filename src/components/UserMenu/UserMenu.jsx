import { NavLink } from "react-router-dom";
import css from "./UserMenu.module.css";
import clsx from "clsx";

const UserMenu = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <ul>
      <li className={css.list}>
        <NavLink className={buildLinkClass} to="contacts">
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;