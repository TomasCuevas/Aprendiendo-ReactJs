import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext( AuthContext );

  const handleLogin = () => {
    login( 'Tomás Cuevas' );
    navigate('/marvel', {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ handleLogin }
      >
        Login
      </button>
    </div>
  )
}