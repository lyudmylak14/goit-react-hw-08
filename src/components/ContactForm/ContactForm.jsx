import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/operations';
// import { addContactThunk } from '../../redux/auth/operations';

const initValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContactThunk(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={initValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputDiv}>
          <label className={css.label}>
            <p>Name</p>
            <Field className={css.input} type="text" name="name"></Field>
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
        </div>
        <div className={css.inputDiv}>
          <label className={css.label}>
            <p>Number</p>
            <Field className={css.input} type="text" name="number"></Field>
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="span"
            />
          </label>
        </div>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
