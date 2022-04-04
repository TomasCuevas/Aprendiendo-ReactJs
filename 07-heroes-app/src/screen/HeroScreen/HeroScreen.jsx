import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const { heroId } = useParams();
  const hero = getHeroById(heroId);

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
  
  return (
    <>
      <h1>Hero Screen</h1>
      <hr />

    </>
  )
}
