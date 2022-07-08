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
        dispatch(clearErrorMessage());
      }, 1000);
    }
  };

  const startRegister = async ({ name, email, password }) => {
    try {
      dispatch(onChecking());

      const { data } = await calendarApi.post('/auth/new', {
        name,
        email,
        password,
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log(error);
      dispatch(onLogout(error.response.data?.msg || ''));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 1000);
    }
  };

  const startLogout = async () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  const checkAuthToken = async () => {
    try {
      dispatch(onChecking());

      const token = localStorage.getItem('token');
      if (!token) return dispatch(onLogout());

      const { data } = await calendarApi.get('/auth/refresh');
      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  return {
    // properties
    errorMessage,
    status,
    user,

    // methods
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
