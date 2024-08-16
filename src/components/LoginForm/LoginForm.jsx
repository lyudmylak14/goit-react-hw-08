import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom"
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
    const initialValues = {
        email: "",
        pasword: "",
    };
    const dispatch = useDispatch();
    const handleSubmit = (values, options) => {
      dispatch(loginThunk(values));
        console.log(values);
        options.resetForm();
    };
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }
  return (
    <div>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
            <Field name="email" placeholder="Enter your email" />
            <Field name="password" type="password" placeholder="Enter your password" />
            <button type="submit">Log In</button>
            <p>
            You do not have an account?<Link to='/register'>Sign up</Link>
          </p>
        </Form>
    </Formik>
    </div>
  );
};

export default LoginForm;