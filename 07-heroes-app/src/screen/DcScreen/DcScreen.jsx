import React from 'react'
import { HeroesList } from '../../components/HeroesList/HeroesList';

import indexStyles from '../../index.module.scss';

export const DcScreen = () => {

  return (
    <>
      <h1>Dc Screen</h1>
      <hr />

      <HeroesList publisher={'DC Comics'}/>
    </>
  )
}