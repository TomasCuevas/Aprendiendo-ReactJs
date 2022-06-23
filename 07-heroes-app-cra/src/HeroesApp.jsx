import React from 'react'

import { Auth } from './context/Auth'
import { AppRouter } from './routes/AppRouter'

export const HeroesApp = () => {

  return (
    <Auth>
      <AppRouter />
    </Auth>
  )
}