import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  Navigate,
} from 'react-router-dom';

import {
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from '../03-forms/pages';

import logo from '../logo.svg';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />

          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                replace
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                replace
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                replace
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                replace
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstractations"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                replace
              >
                Formik Abstractations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik"
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
                replace
              >
                Register Formik
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route
            path="/formik-abstractations"
            element={<FormikAbstractation />}
          />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/*" element={<Navigate to="/register" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
