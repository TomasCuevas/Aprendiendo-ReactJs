import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';

export const PublicRoute = ({children}) => {
  const { authState } = useContext(AuthContext)

  return (
    <>
      {
        (authState.logged)
          ? (
            <Navigate to='/' replace />
          )
          : (
            children
          )
      }
    </>
  )
}