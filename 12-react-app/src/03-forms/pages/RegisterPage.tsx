import { useState } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const { formData, name, email, password, repeatPassword, onChange } = useForm(
    {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  );

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
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="repeatPassword"
          value={repeatPassword}
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
