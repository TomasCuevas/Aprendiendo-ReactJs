import React from 'react'
import { HeroesList } from '../../components/HeroesList/HeroesList';

import indexStyles from '../../index.module.scss';

export const MarvelScreen = () => {

  return (
    <>
      <h1>Marvel Screen</h1>
      <hr />

      <HeroesList publisher={'Marvel Comics'}/>
    </>
  )
}
