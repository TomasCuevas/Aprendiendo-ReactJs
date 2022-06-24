import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext( AuthContext );
  
  const handleLogin = () => {
    const lasthPath = JSON.parse( localStorage.getItem('lastPath') ) || '/marvel';
    
    login( 'Tomás Cuevas' );
    navigate(lasthPath, {
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