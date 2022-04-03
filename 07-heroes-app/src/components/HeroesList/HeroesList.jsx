import React from 'react';

import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import styles from './heroesList.module.scss';

export const HeroesList = ({ publisher }) => {

  const heroes = getHeroByPublisher(publisher);
  
  return (
    <div className={styles.list__container}>
      <ul className={styles.list}>
        {
          heroes.map(hero => (
            <li 
              key={hero.id}
              className={styles.list__element}
            >
              <p>{hero.superhero}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}