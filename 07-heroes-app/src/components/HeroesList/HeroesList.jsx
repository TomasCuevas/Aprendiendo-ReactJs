import React from 'react';

import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './components/HeroCard';
import styles from './heroesList.module.scss';

export const HeroesList = ({ publisher }) => {

  const heroes = getHeroByPublisher(publisher);
  
  return (
    <div className={styles.list__container}>
      <ul className={styles.list}>
        {
          heroes.map(hero => (
            <HeroCard 
              key={hero.id}
              {...hero}
            />
          ))
        }
      </ul>
    </div>
  )
}