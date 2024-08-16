import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"

const AuthNav = () => {
  return (
    <ul>
      <li className={css.list}>
        <NavLink to="login">Log In</NavLink>
      </li>
      <li className={css.list}>
        <NavLink to="register">Register</NavLink>
      </li>
    </ul>
  );
}

export default AuthNav
