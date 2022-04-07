import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { heroes } from '../../database/heroes';

import { HeroCard } from '../../components/HeroesList/components/HeroCard';
import styles from './searchScreen.module.scss';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get('hero') || '';

  const [inputValue, handleInputChange, reset  ] = useForm({
    searchInput: param
  });
  const heroesFiltered = heroes;

  
  
  const handleSearch = (e) => {
    e.preventDefault();

    const hero = inputValue.searchInput.toLowerCase();
    setSearchParams({ hero });

    navigate(`/search?hero=${hero}`);
  }

  

  return (
    <>
      <h1>Search Screen</h1>
      <hr />

      <div className={styles.search__container_all}>
        <div className={styles.search__container}>

          <div className={styles.left__container}>
            <h4 className={styles.search__title}> Search Hero </h4>
            <form 
              onSubmit={handleSearch}
              autoComplete='off'
              className={styles.form__container}
            >
              <label className={styles.form__label}>
                <span>Hero</span>
                <input 
                  type="text" 
                  placeholder='batman, spiderman, ironman, etc'
                  name='searchInput'
                  value={inputValue.searchInput}
                  className={styles.form__input}
                  onChange={handleInputChange}
                />
              </label>
              <button className={styles.form__btn}>
                Search
              </button>
            </form>
          </div>

          <div className={styles.right__container}>
            <h4 className={styles.search__title}> Result </h4>
            {
              heroesFiltered.map(hero => (
                <HeroCard 
                  key={hero.id}
                  {...hero}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}