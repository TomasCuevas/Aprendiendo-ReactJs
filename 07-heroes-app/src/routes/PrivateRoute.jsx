import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';
import { DasboardRoutes } from './DasboardRoutes';

export const PrivateRoute = ({component: Component}) => {
  const { authState } = useContext(AuthContext);
  const location = useLocation();

  const lastPath = `${location.pathname}${location.search || ''}`;
  localStorage.setItem('lastPath', lastPath);

  return (
    <>
      {
        (authState.logged)
          ? (
            <Component />
          )
          : (
            <Navigate to='/login' replace />
          )
      }
    </>
  )
}