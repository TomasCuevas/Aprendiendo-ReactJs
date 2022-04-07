import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './navbar.module.scss';

export const Navbar = () => {

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
            <NavLink 
              to='/login' 
              className={`${styles.nav__link} ${styles.nav__link_login}`} 
            >
              Logout
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  )
}