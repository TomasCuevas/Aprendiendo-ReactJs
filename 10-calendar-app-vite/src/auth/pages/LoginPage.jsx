import { useForm } from '../../hooks';
import './LoginPage.css';

export const LoginPage = () => {
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
    console.log({ loginEmail, loginPassword });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
    console.log({ registerName, registerEmail, registerPassword, registerConfirmPassword });
  };

  return (
    <div className="container login-container">
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
