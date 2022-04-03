import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../screen/LoginScreen/LoginScreen';
import { DasboardRoutes } from './DasboardRoutes';

export const AppRouter = () => {

  return (
    <>

      <Router>

        {/* <Navbar /> */}

        <Routes>
          <Route path='/login' element={<LoginScreen />} />
          <Route path='*' element={<DasboardRoutes />} />
        </Routes>

      </Router>
    </>
  )
}
