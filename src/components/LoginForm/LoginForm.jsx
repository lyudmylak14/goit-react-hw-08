import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.label}>
            <p> Email</p>
            <Field
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </label>
          <label className={css.label}>
            <p> Password</p>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
            />
          </label>
          <button className={`${css.submitBtn} addHoverToButton`} type="submit">
            Log In
          </button>
          <p>
            Do you not have an account yet?
            <Link className={`${css.link} addHoverToLink`} to="/register">
              {' '}
              Sign up
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
