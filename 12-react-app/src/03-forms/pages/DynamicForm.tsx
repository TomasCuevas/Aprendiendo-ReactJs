import { Formik, Form } from 'formik';

import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

export const DynamicForm = () => {
  console.log(formJson);

  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={{
          name: 'Tomas',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, label, name, placeholder, value }) => {
              return (
                <MyTextInput
                  key={name}
                  label={label}
                  name={name}
                  type={type as any}
                  placeholder={placeholder}
                />
              );
            })}

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
