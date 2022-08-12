import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less.')
            .required('Fist name is required.'),
          lastName: Yup.string()
            .max(15, 'Must be 15 characters or less.')
            .required('Last name is required.'),
          email: Yup.string()
            .email('It is not a valid email.')
            .required('Email is required.'),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field id="firstName" name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field id="lastName" name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="text" />
            <ErrorMessage name="email" component="span" />

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
