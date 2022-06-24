import { Routes, Route } from 'react-router-dom';

/**
 * @pages
 */
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

/**
 * @routers
 */
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {

  return (
    <>
      <Routes>
        
        <Route path='/login' element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        } />

        <Route path='/*' element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
        } />
    
      </Routes>
    </>
  )
}