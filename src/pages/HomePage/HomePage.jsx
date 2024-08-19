import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Welcome to your Phone Book!</h2>
      <p className={css.text}>Create and save your contact list here!</p>
    </div>
  );
};

export default HomePage;
