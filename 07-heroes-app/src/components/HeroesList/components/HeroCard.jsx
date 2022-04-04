import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../heroesList.module.scss';
 
export const HeroCard = ({id, superhero, publisher}) => {

  return (
    <Link
      to={`/hero/${id}`}
      className={styles.card__link}  
    >
      
      <li 
        className={styles.list__element}
      >
        <div 
          id={id}
          className={styles.card__container}
        >
          <img 
            className={styles.card__img}
            src={`/assets/heroes/${id}.jpg`} 
            alt="heroe image" 
          />
          <div className={styles.card__info}>
            <h3 className={styles.card__superhero}>{superhero}</h3>
            <span className={styles.card__publisher}>{publisher}</span>
          </div>
        </div>
      </li>

    </Link>
  )
}