import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password,
    repeatPassword,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={name.trim().length < 1 ? 'has-error' : ''}
        />
        {name.trim().length < 1 && <span>Este campo en obligatorio.</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={!isValidEmail(email) ? 'has-error' : ''}
        />
        {!isValidEmail(email) && <span>Este campo en obligatorio.</span>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          className={password.length < 8 ? 'has-error' : ''}
        />
        {password.length < 8 && (
          <span>El password debe tener minimo 8 caracteres.</span>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={onChange}
          className={
            repeatPassword != password || repeatPassword.length < 8
              ? 'has-error'
              : ''
          }
        />
        {repeatPassword !== password ||
          (repeatPassword.length < 8 && (
            <span>Las contraseñas no coinciden.</span>
          ))}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
