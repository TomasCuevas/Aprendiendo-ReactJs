import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredField: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required')
      schema = schema.required(`${input.label} is a required field`);
    if (rule.type === 'min')
      schema = schema.min(
        (rule as any).value,
        `${input.label} must have at least ${rule.value} characters `,
      );
    if (rule.type === 'email')
      schema = schema.email(`${input.label}, must be a valid email.`);
  }

  requiredField[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredField });

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, label, name, placeholder, options }) => {
              if (
                type === 'email' ||
                type === 'password' ||
                type === 'text' ||
                type === 'input'
              ) {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    name={name}
                    type={type as any}
                    placeholder={placeholder}
                  />
                );
              }

              if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return <span>Type: {type} no es soportado</span>;
            })}

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
