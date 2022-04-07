import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { heroes } from '../../database/heroes';
import { getHeroByName } from '../../selectors/getHeroByName';

import { HeroCard } from '../../components/HeroesList/components/HeroCard';
import styles from './searchScreen.module.scss';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get('hero') || '';

  const initialState = {
    searchInput: param
  }
  const [inputValue, handleInputChange, reset  ] = useForm(initialState);
  useState

  const [heroFiltered, setHeroFiltered] = useState([]);
  
  const handleSearch = (e) => {
    e.preventDefault();

    const hero = inputValue.searchInput.toLowerCase();
    setSearchParams({ hero });

    const heroFilter = getHeroByName(hero);
    setHeroFiltered(heroFilter);

    navigate(`/search?hero=${hero}`);
  }

  useEffect(() => {
    if (param === '') {
      setHeroFiltered([]);
      handleInputChange({ target: { name: 'searchInput', value: '' } });
    }
    
    if (param !== '') {
      const heroFilter = getHeroByName(param);
      setHeroFiltered(heroFilter);
    }
  }, [param])

  
  
  
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
                  placeholder='batman, spider man, iron man, etc'
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
              (!param) 
              &&
              <div className={styles.search__info_container}>
                <p className={styles.search__info}>Please enter a hero name</p>
              </div>
            }

            {
              (param !== null && param !== '' && heroFiltered.length === 0)
              &&
              <div className={styles.search__warning_container}>
                <p className={styles.search__warning}>There is not a hero "{param}"</p>
              </div>
            }
            
            {
              (heroFiltered.length > 0) 
              &&
              heroFiltered.map((hero) => (
                <HeroCard 
                  key={ hero.id }
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