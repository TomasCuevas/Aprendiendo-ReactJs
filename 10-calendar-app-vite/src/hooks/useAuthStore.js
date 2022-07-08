import { useSelector, useDispatch } from 'react-redux';
import calendarApi from '../apis/calendarApi';

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const startLogin = async ({ email, password }) => {
    try {
      const resp = await calendarApi.post('/auth', { email, password });
      console.log({ resp });
    } catch (error) {
      console.log(error);
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
