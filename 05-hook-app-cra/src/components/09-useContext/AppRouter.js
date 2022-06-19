import React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import { NavBar } from './components/NavBar/NavBar';
import { AboutScreen } from './screen/AboutScreen/AboutScreen';
import { HomeScreen } from './screen/HomeScreen/HomeScreen';
import { LoginScreen } from './screen/LoginScreen/LoginScreen';
import './styles.css';

export const AppRouter = () => {

    return (
        <Router>
            <div>

                <NavBar />
                
                <div className='main__container-all'>
                    <div className='main__container'>
                        <Routes>
                            <Route path='/' element={ <HomeScreen /> } />
                            <Route path='/about' element={ <AboutScreen /> } />
                            <Route path='/login' element={ <LoginScreen /> } />
                            <Route path='*' element={ <HomeScreen /> } />
                        </Routes>
                    </div>
                </div>

            </div>
        </Router>
    )
}
