import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({component: Component, logged = false}) => {  
  const location = useLocation();

  const lastPath = `${location.pathname}${location.search || ''}`;
  localStorage.setItem('lastPath', lastPath);

  return (
    <>
      {
        (logged)
          ? <Component />
          : <Navigate to='/login' replace />
      }
    </>
  )
}