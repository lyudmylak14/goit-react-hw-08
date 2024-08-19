import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

  return (
    <div className={css.container}>
            <h2 className={css.welcomeText}>Welcome {user.name}!</h2>
            <button className={`${css.submitBtn} addHoverToButton`}
              type="submit"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </button>
    </div>
  );
};

export default UserMenu;