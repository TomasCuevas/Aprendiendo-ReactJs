import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckbox } from '../components';
import '../styles/styles.css';

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
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
          terms: Yup.boolean().oneOf([true], 'You must accept the conditions.'),
          jobType: Yup.string()
            .required('Job type is required.')
            .notOneOf(
              ['frontend junior'],
              'We are not looking for frontend juniors.',
            ),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" type="text" />
            <MyTextInput label="Last Name" name="lastName" type="text" />
            <MyTextInput label="Email" name="email" type="email" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="development">Development</option>
              <option value="designer">Designer</option>
              <option value="frontend junior">Frontend Junior</option>
              <option value="frontend senior">Frontend Senior</option>
            </MySelect>

            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
