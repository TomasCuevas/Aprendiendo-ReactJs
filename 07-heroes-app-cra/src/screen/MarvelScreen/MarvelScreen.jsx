import React from 'react'

import { HeroesList } from '../../components/HeroesList/HeroesList';

export const MarvelScreen = () => {

  return (
    <>
      <h1>Marvel Screen</h1>
      <hr />

      <HeroesList publisher={'Marvel Comics'}/>
    </>
  )
}
