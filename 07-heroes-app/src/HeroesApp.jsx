import React, { useReducer } from 'react'

import { authReducer } from './auth/authReducer'
import { AuthContext } from './auth/AuthContext'

import { AppRouter } from './routes/AppRouter'

export const HeroesApp = () => {
  const [authState, dispatch] = useReducer(authReducer, {
    isAuthenticated: false
  })

  const login = () => {
    dispatch({
      type: types.login
    })
  }

  const logout = () => {
    dispatch({
      type: types.logout
    })
  }

  return (
    <AuthContext.Provider value={{ 
      authState, 
      login, 
      logout 
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}