import React, { useMemo } from 'react';

import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './components/HeroCard';
import styles from './heroesList.module.scss';

export const HeroesList = React.memo(({ publisher }) => {

  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

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
})