import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Name is a required field.')
            .min(2, 'Name, must have at least 2 characters.')
            .max(15, 'Name, must have at maximum of 15 characters. '),
          email: Yup.string().required('Email is a required field.').email(),
          password: Yup.string()
            .required('Password is a required field.')
            .min(6, 'Password, must have at least 6 characters.'),
          repeatPassword: Yup.string()
            .required('Repeat Password is a required field.')
            .oneOf([Yup.ref('password')], 'Password must match.'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" type="text" />
            <MyTextInput label="Email" name="email" type="email" />
            <MyTextInput label="Password" name="password" type="password" />
            <MyTextInput
              label="Repeat Password"
              name="repeatPassword"
              type="password"
            />

            <button type="submit">Register</button>
            <button type="button" onClick={handleReset}>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
