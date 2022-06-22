import { useContext } from "react"

/**
 * @context
 */
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <hr />

      <pre aria-label="pre-login">
        { JSON.stringify( user, null, 3 ) }
      </pre>

      <button
        className="btn btn-outline-primary"
        onClick={() => setUser({ id: 123, name: 'Tomas Cuevas', email: 'tomascuevas15@gmail.com' })}
        aria-label="login-buttom"
      >
        Establecer usuario
      </button>
    </>
  )
}