import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../screen/LoginScreen/LoginScreen';
import { DasboardRoutes } from './DasboardRoutes';

export const AppRouter = () => {

  return (
    <>

      <Router>

        {/* <Navbar /> */}

        <Routes>
          
          <Route path='/login' element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          } />

          <Route path='*' element={
            <PrivateRoute>
              <DasboardRoutes />
            </PrivateRoute>
          } />

        </Routes>

      </Router>
    </>
  )
}
