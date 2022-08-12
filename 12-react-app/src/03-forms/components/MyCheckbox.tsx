import { useField } from 'formik';

interface Props {
  [x: string]: any;
  label: string;
  name: string;
}

export const MyCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input
          {...field}
          {...props}
          id={props.id || props.name}
          type="checkbox"
        />
        {label}
      </label>
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
