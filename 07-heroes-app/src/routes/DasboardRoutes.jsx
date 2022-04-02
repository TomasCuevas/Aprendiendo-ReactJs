import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MarvelScreen } from '../screen/MarvelScreen/MarvelScreen';
import { DcScreen } from '../screen/DcScreen/DcScreen';
import { HeroeScreen } from '../screen/HeroeScreen/HeroeScreen';
import { MainScreen } from '../screen/MainScreen/MainScreen';

import { Navbar } from '../components/Navbar/Navbar';
import styles from './approuter.module.scss';

export const DasboardRoutes = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/marvel' element={<MarvelScreen />} />
        <Route path='/dc' element={<DcScreen />} />
        <Route path='/heroe/heroeId' element={<HeroeScreen />} />
        <Route path='*' element={<MainScreen />}/>
      </Routes>
    </>
  )
}