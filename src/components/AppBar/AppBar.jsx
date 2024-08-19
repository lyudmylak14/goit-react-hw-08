import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';


const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;
