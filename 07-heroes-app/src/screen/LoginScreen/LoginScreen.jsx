import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';

import indexStyles from '../../index.module.scss';
import styles from './loginScreen.module.scss';

const initialValue = {
  name: ''
}

export const LoginScreen = () => {
  const { authState, login } = useContext(AuthContext)
  const [formValues, handleInputChange] = useForm(initialValue);
  const navigate = useNavigate();
  const lastPath = localStorage.getItem('lastPath') || '/'; 

  const handleClick = (e) => {
    e.preventDefault();
    if (formValues.name === '') return;

    login(formValues.name);

    navigate(lastPath, {replace: true});
  }
  
  return (
    <main className={indexStyles.container__all}>
      <div className={indexStyles.container}>
        <h1>Login Screen</h1>
        <hr />

        <div className={styles.form__container_all}>
          <form 
            onSubmit={handleClick} 
            className={styles.form__container}
            autoComplete='off'
          >
            <label className={styles.label}>
              <span>Name</span>
              <input 
                type="text" 
                name='name'
                value={formValues.name}
                onChange={handleInputChange}
                className={styles.input} 
              />
            </label>
            <button className={styles.btn__primary}>
              Login
            </button>
          </form>
        </div>
        
      </div>
    </main>
  )
}
