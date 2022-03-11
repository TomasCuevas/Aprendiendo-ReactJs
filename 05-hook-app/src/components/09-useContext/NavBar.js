import React from 'react'
import { 
    Link,
    NavLink 
} from "react-router-dom";

import './styles.css';

export const NavBar = () => {

    return (
        <nav className='nav__container'>
            <Link to='/' className='title__page'>useContext</Link>
            
            <ul className='list__container'>
                <li className='list__element'>
                    <NavLink to="/" activeClassname='active' className='list__element-text'> Home </NavLink>
                </li>
                <li className='list__element'>
                    <NavLink to="/about" activeClassname='active' className='list__element-text'> About </NavLink>
                </li>
                <li className='list__element'>
                    <NavLink to="/login" activeClassname='active' className='list__element-text'> Login </NavLink>
                </li>
            </ul>
        </nav>
    )
}
