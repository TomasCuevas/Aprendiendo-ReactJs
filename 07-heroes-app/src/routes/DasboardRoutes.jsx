import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MarvelScreen } from '../screen/MarvelScreen/MarvelScreen';
import { DcScreen } from '../screen/DcScreen/DcScreen';
import { HeroeScreen } from '../screen/HeroeScreen/HeroeScreen';
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
            <Route path='/marvel' element={<MarvelScreen />} />
            <Route path='/dc' element={<DcScreen />} />
            <Route path='/heroe/heroeId' element={<HeroeScreen />} />
            <Route path='*' element={<MainScreen />}/>
          </Routes>
        </div>
      </main>
    </>
  )
}