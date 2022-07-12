import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm, useAuthStore } from '../../hooks';

import './LoginPage.css';

export const LoginPage = () => {
  const { startLogin, startRegister, errorMessage } = useAuthStore();
  const {
    loginEmail,
    loginPassword,
    onInputChange: loginChange,
  } = useForm({
    loginEmail: '',
    loginPassword: '',
  });

  const {
    registerName,
    registerEmail,
    registerPassword,
    registerConfirmPassword,
    onInputChange: registerChange,
  } = useForm({
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: '',
  });

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      Swal.fire('Error en registro.', 'Contraseñas no coinciden.', 'error');
      return;
    }
    startRegister({
      name: registerName,
      email: registerEmail,
      password: registerPassword,
      confirmPassword: registerConfirmPassword,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticacion', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <div aria-label="login-page" className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                className="form-control"
                name="loginEmail"
                onChange={loginChange}
                placeholder="Correo"
                type="text"
                value={loginEmail}
              />
            </div>
            <div className="form-group mb-2">
              <input
                className="form-control"
                name="loginPassword"
                onChange={loginChange}
                placeholder="Contraseña"
                type="password"
                value={loginPassword}
              />
            </div>
            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                className="form-control"
                name="registerName"
                onChange={registerChange}
                placeholder="Nombre"
                type="text"
                value={registerName}
              />
            </div>
            <div className="form-group mb-2">
              <input
                className="form-control"
                name="registerEmail"
                onChange={registerChange}
                placeholder="Correo"
                type="email"
                value={registerEmail}
              />
            </div>
            <div className="form-group mb-2">
              <input
                className="form-control"
                name="registerPassword"
                onChange={registerChange}
                placeholder="Contraseña"
                type="password"
                value={registerPassword}
              />
            </div>

            <div className="form-group mb-2">
              <input
                className="form-control"
                name="registerConfirmPassword"
                onChange={registerChange}
                placeholder="Repita la contraseña"
                type="password"
                value={registerConfirmPassword}
              />
            </div>

            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
