import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth/authSlice';

import { AuthRoutes } from '../auth/router/AuthRoutes';
import { JournalRoutes } from '../journal/router/JournalRoutes';
import { CheckingAuth } from '../ui/components/CheckingAuth';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (user) => {
      if (!user) return dispatch(logout());
      dispatch(login(user));
    });
  }, []);

  if (status === 'checking') return <CheckingAuth />;

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<JournalRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
