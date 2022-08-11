import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const validate = ({ firstName, lastName, email }: FormValues) => {
  const errors: FormikErrors<FormValues> = {};

  if (!firstName.trim()) {
    errors.firstName = 'First name is required.';
  } else if (firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less.';
  }

  if (!lastName.trim()) {
    errors.lastName = 'Last name is required.';
  } else if (lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less.';
  }

  if (!email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export const FormikBasicPage = () => {
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
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

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
