import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';

import { routes } from './routes';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />

            <ul>
              {routes.map(({ name, to }) => (
                <li key={name}>
                  <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to={to}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
