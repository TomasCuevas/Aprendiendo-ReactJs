import { useFormik } from 'formik';

import '../styles/styles.css';

export const FormikBasicPage = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          onChange={handleChange}
          type="text"
          value={values.firstName}
        />
        <span>First name is required</span>

        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          onChange={handleChange}
          type="text"
          value={values.lastName}
        />
        <span>Last name is required</span>

        <label htmlFor="email">Email</label>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          value={values.email}
        />
        <span>Email is required</span>

        <label htmlFor="password">Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          value={values.password}
        />
        <span>Password is required</span>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
