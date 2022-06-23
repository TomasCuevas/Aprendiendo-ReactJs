import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'

import { getHeroById } from '../../selectors/getHeroById';
import styles from './heroScreen.module.scss';

export const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if ( !hero ) {
    return <Navigate to='/' replace />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleReturn = () => {
    (publisher === 'DC Comics') 
    ? navigate('/dc') 
    : navigate('/marvel');
  }
  
  return (
      <div className={styles.card__container_all}>
        <div className={styles.card__container}>

          <div className={styles.left__card}>
            <img 
              src={`/assets/heroes/${id}.jpg`} 
              alt="hero image" 
              className={styles.card__img} 
            />
          </div>
          
          <div className={styles.right__card}>
            <h3 className={styles.superhero}>{ superhero }</h3>
            <ul className={styles.list_container}>
              <li className={styles.list__element}> 
                <b>Publisher:</b> {publisher} 
              </li>
              <li className={styles.list__element}> 
                <b>Alter ego:</b> {alter_ego} 
              </li>
              <li className={styles.list__element}> 
                <b>First Appearance</b> {first_appearance} 
              </li>
              {
                (alter_ego !== characters) &&
                <li className={styles.list__element}> 
                  <b>Characters:</b> {characters} 
                </li>
              }
            </ul>

            <button 
              className={styles.card__return}
              onClick={handleReturn}
            >
              Return...
            </button>

          </div>

        </div>
      </div>
  )
}
