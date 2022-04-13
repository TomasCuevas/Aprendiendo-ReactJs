import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Auth } from '../context/Auth';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../screen/LoginScreen/LoginScreen';
import { DasboardRoutes } from './DasboardRoutes';

export const AppRouter = () => {

  return (
      <Auth>
        <Router>

          {/* <Navbar /> */}

          <Routes>
            
            <Route path='/login' element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            } />

            <Route path='*' element={ <PrivateRoute component={DasboardRoutes} /> } />

          </Routes>

        </Router>

      </Auth>
  )
}
