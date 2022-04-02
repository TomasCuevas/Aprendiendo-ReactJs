import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../screen/LoginScreen/LoginScreen';
import { MarvelScreen } from '../screen/MarvelScreen/MarvelScreen';
import { DcScreen } from '../screen/DcScreen/DcScreen';
import { MainScreen } from '../screen/MainScreen/MainScreen';
import { Navbar } from '../components/Navbar/Navbar';
import styles from './approuter.module.scss';

export const AppRouter = () => {

  return (
    <>

      <Router>

        <Navbar />

        <div className={styles.container}>
          <div className={styles.container__all}>
            <Routes>
              <Route path='/marvel' element={<MarvelScreen />} />
              <Route path='/dc' element={<DcScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/' element={<MainScreen />} />
              <Route path='*' element={<MarvelScreen />} />
            </Routes>
          </div>
        </div>

      </Router>
    </>
  )
}
