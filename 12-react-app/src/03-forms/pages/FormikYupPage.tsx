import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less.')
          .required('Fist name is required.'),
        lastName: Yup.string()
          .max(15, 'Must be 15 characters or less.')
          .required('Last name is required.'),
        email: Yup.string()
          .email('It is not a valid email.')
          .required('Email is required.'),
      }),
    });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          type="email"
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
