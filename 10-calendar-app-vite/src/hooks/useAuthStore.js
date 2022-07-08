import { useSelector, useDispatch } from 'react-redux';
import calendarApi from '../apis/calendarApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const startLogin = async ({ email, password }) => {
    try {
      dispatch(onChecking());

      const { data } = await calendarApi.post('/auth', { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas.'));
      setTimeout(() => {
        dispatch(clearErrorMessage);
      }, 1000);
    }
  };

  return {
    // properties
    errorMessage,
    status,
    user,

    // methods
    startLogin,
  };
};
