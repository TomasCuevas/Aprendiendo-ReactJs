import { useState } from 'react';
import '../styles/styles.css';

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const { name, email, password, repeatPassword } = registerData;

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form>
        <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} />
        <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
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
