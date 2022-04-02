import React from 'react'

import indexStyles from '../../index.module.scss';

export const MainScreen = () => {

  return (
    <main className={`${indexStyles.container__all}`}>
      <div className={`${indexStyles.container}`}>
        <h1>Main Screen</h1>
      </div>
    </main>
  )
}