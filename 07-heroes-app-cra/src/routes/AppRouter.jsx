import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../screen/LoginScreen/LoginScreen';
import { DasboardRoutes } from './DasboardRoutes';

export const AppRouter = () => {
  const { authState, login } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        
        <Route path='/login' element=
          {
            <PublicRoute component={LoginScreen} logged={authState.logged} login={login} />  
          } 
        />

        <Route path='*' element=
          { 
            <PrivateRoute component={DasboardRoutes} logged={authState.logged} /> 
          } 
        />

      </Routes>
    </Router>
  )
}
