import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';

export const PrivateRoute = ({children}) => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();

  const lastPath = `${location.pathname}${location.search || ''}`;
  localStorage.setItem('lastPath', lastPath);

  return (
    <>
      {
        (authState.logged)
          ? (
            children
          )
          : (
            <Navigate to='/login' replace />
          )
      }
    </>
  )
}