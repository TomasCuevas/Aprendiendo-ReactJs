import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';

import styles from './navbar.module.scss';

export const Navbar = () => {
  const navigate = useNavigate();
  const { authState, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <nav className={styles.container__all}>
      <div className={styles.container}>

        <ul className={styles.list__container}>
          <li className={styles.list__item}>
            <Link 
              to='' 
              className={`${styles.nav__link} ${styles.nav__link_home}`}
            >
              HeroesApp
            </Link>
          </li>
          <li className={styles.list__item}>
            <NavLink 
              to='/marvel' 
              className={styles.nav__link} 
            >
              Marvel
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink 
              to='/dc' 
              className={styles.nav__link} 
            >
              Dc
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink 
              to='/search' 
              className={styles.nav__link} 
            >
              Search
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <span className={styles.auth__name}>
              { authState.name || 'Invited' }
            </span>
          </li>
          <li className={styles.list__item}>
            {
              (authState.logged)
                ? (
                  <button 
                    className={`${styles.nav__link} ${styles.nav__link_login}`} 
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )
                : (
                  <button 
                    className={`${styles.nav__link} ${styles.nav__link_login}`} 
                    onClick={handleLogout}
                  >
                    Login
                  </button>
                )
            }
          </li>
        </ul>
        
      </div>
    </nav>
  )
}