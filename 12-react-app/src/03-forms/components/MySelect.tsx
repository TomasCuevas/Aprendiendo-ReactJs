import { ErrorMessage, useField } from 'formik';

interface Props {
  [x: string]: any;
  label: string;
  name: string;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} id={props.id || props.name} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
