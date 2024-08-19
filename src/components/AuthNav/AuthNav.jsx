import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"

const AuthNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink to="login">Log In</NavLink>
      </li>
      <li className={css.item}>
        <NavLink to="register">Register</NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
