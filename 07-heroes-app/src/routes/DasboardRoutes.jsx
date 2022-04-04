import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MarvelScreen } from '../screen/MarvelScreen/MarvelScreen';
import { DcScreen } from '../screen/DcScreen/DcScreen';
import { HeroScreen } from '../screen/HeroScreen/HeroScreen';
import { MainScreen } from '../screen/MainScreen/MainScreen';

import { Navbar } from '../components/Navbar/Navbar';
import indexStyles from '../index.module.scss';

export const DasboardRoutes = () => {

  return (
    <>
      <Navbar />
      <main className={indexStyles.container__all}>
        <div className={indexStyles.container}>
          <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='/marvel' element={<MarvelScreen />} />
            <Route path='/dc' element={<DcScreen />} />
            <Route path='/hero/:heroId' element={<HeroScreen />} />
            <Route path='*' element={<Navigate to='/' replace />}/>
          </Routes>
        </div>
      </main>
    </>
  )
}