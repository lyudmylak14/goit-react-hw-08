import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };
  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.label}>
            <p className={css.title}>Name</p>
            <Field name="name" type="text" placeholder="Enter your name" />
          </label>
          <label className={css.label}>
            <p className={css.title}>Email</p>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </label>
          <label className={css.label}>
            <p>Password</p>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </label>
          <button className={`${css.submitBtn} addHoverToButton`} type="submit">
            Register
          </button>
          <p>
            Do you already have an account?
            <Link className={`${css.link} addHoverToLink`} to="/login">
              {' '}
              Sign in
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
