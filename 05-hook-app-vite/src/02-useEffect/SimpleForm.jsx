import { useEffect, useState } from 'react';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'TomasCuevas15',
    email: 'tomascuevas@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  useEffect(() => {
    console.log('useEffect called!');
  })

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input 
        type="text" 
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input 
        type="email" 
        className="form-control mt-2"
        placeholder="correo electronico"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  )
}
