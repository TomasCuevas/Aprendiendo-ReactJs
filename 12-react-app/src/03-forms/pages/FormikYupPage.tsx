import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
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
        <input {...getFieldProps('firstName')} id="firstName" type="text" />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input {...getFieldProps('lastName')} id="lastName" type="text" />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input {...getFieldProps('email')} id="email" type="email" />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
