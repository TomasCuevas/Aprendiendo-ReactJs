import { Routes, Route, Navigate, Link } from 'react-router-dom';

/**
 * @pages
 */
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';

/**
 * @components
 */
import { Navbar } from './Navbar';

export const MainApp = () => {

  return (
    <>
      <h1>Main App</h1>
      <Navbar />
      <hr />


      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/about' element={ <AboutPage /> } />

        
        <Route path='/*' element={ <Navigate to='/' /> } />
      </Routes>
    </>
  )
}