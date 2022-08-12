import { useField } from 'formik';

interface Props {
  [x: string]: any;
  label: string;
  name: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className="text-input"
        id={props.id || props.name}
      />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
