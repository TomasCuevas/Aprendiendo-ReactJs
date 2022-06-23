import { Routes, Route } from 'react-router-dom';

/**
 * @components
 */
import { Navbar } from '../../ui';

/**
 * @pages
 */
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../';

export const HeroesRoutes = () => {

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <Routes>
          
          <Route path='/marvel' element={ <MarvelPage /> } />
          <Route path='/dc' element={ <DcPage /> } />
          <Route path='/search' element={ <SearchPage /> } />
          <Route path='/hero/:id' element={ <HeroPage /> } />

        </Routes>
      </div>
    </>
  )
}