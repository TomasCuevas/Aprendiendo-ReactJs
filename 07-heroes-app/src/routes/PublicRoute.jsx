import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({component: Component, logged}) => {

  return (
    <>
      {
        (logged)
          ? <Navigate to='/' replace />
          : <Component />
      }
    </>
  )
}