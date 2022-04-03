import React from 'react'
import { useNavigate } from 'react-router-dom';

import indexStyles from '../../index.module.scss';
import styles from './loginScreen.module.scss';

export const LoginScreen = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', {replace: true});
  }
  
  return (
    <main className={indexStyles.container__all}>
      <div className={indexStyles.container}>
        <h1>Login Screen</h1>
        <hr />

        <button 
          className={styles.btn__primary}
          onClick={handleClick}  
        >
          Login
        </button>
      </div>
    </main>
  )
}
