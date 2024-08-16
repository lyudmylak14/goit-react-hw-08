
import css from './AppBar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import { logoutThunk } from '../../redux/auth/operations';

const AppBar = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <header className={css.header}>
      {/* <h3>{user.name}</h3>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Navigation />
      <button onClick={() => dispatch(logoutThunk())}>Logout</button> */}
      <Navigation />
      {isLoggedIn ? (
        <h2>Welcome {user.name}!</h2> && <UserMenu /> && (
          <button
            type="submit"
            onClick={() => {
              dispatch(logoutThunk());
            }}>
            Exit
          </button>
        )
      ) : (
        <AuthNav />
      )}
    </header>
  );
};

export default AppBar;
