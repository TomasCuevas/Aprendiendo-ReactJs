import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types';

import { authReducer } from '../auth/authReducer'
import { AuthContext } from '../auth/AuthContext'

import { types } from '../types/types';

const init = () => {
  return JSON.parse(localStorage.getItem('authState')) || { logged: false };
}

export const Auth = ({children, test = false, logged = false}) => {
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

  if (test) {
    return (
      <AuthContext.Provider value={{
          authState: {
            logged
          },
          login,
          logout
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }

  return (
    <AuthContext.Provider value={{ 
      authState,
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
  test: PropTypes.bool
}