import { Routes, Route } from 'react-router-dom';

/**
 * @pages
 */
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

/**
 * @routers
 */
import { PrivateRoutes } from './PrivateRouter';

export const AppRouter = () => {

  return (
    <>
      <Routes>
        
        <Route path='/login' element={ <LoginPage /> } />

        <Route path='/*' element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>
        } />
    
      </Routes>
    </>
  )
}