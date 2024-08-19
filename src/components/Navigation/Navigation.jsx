import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
      </li>
      {isLoggedIn && (
        <li className={css.item}>
          <NavLink className={buildLinkClass} to="contacts">
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
