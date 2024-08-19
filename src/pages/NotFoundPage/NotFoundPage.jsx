import { NavLink } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFound = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Sorry, the page is not found!</p>
      <div className={css.link}>
        <NavLink to="/">
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
