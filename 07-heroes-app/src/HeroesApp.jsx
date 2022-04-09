import React, { useReducer, useEffect } from 'react'

import { authReducer } from './auth/authReducer'
import { AuthContext } from './auth/AuthContext'

import { AppRouter } from './routes/AppRouter'
import { types } from './types/types'

const init = () => {
  return JSON.parse(localStorage.getItem('authState')) || { logged: false };
}

export const HeroesApp = () => {
  const [authState, dispatch] = useReducer(authReducer, [], init);

  const login = (name) => {
    dispatch({
      type: types.login,
      payload: {
        name
      }
    })
  }
  
  const logout = () => {
    dispatch({
      type: types.logout
    }) 
  }

  useEffect(() => {
    localStorage.setItem('authState', JSON.stringify(authState));
  }, [authState])

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