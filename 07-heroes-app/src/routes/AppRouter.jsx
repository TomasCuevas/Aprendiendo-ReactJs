import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../screen/LoginScreen/LoginScreen';
import { DasboardRoutes } from './DasboardRoutes';
import styles from './approuter.module.scss';

export const AppRouter = () => {

  return (
    <>

      <Router>

        {/* <Navbar /> */}

        <div className={styles.container}>
            <Routes>
              <Route path='/login' element={<LoginScreen />} />
              <Route path='*' element={<DasboardRoutes />} />
            </Routes>
        </div>

      </Router>
    </>
  )
}
