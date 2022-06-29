import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/router/AuthRoutes';
import { JournalRoutes } from '../journal/router/JournalRoutes';
import { CheckingAuth } from '../ui/components/CheckingAuth';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  if (status === 'checking') return <CheckingAuth />;

  return (
    <Routes>
      <Route path='/auth/*' element={<AuthRoutes />} />
      <Route path='/' element={<JournalRoutes />} />
    </Routes>
  );
};
