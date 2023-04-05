import { useAuth0 } from 'react-native-auth0';
import { setAuthUser, setIsLoading, setToken } from '../../redux/authSlice';
import { useAppDispatch } from '../../redux/store';

export const useAuthentication = () => {
  const { authorize, user, getCredentials, clearSession } = useAuth0();
  const dispatch = useAppDispatch();

  const checkIfLoggedIn = async () => {
    try {
      const credentials = await getCredentials();
      dispatch(setToken(credentials.accessToken));
    } catch (e) {
      console.log(e);
    }
  };

  const login = async () => {
    try {
      dispatch(setIsLoading(true));
      await authorize({ scope: 'openid profile email' });
      dispatch(setAuthUser(user));
      const credentials = await getCredentials();
      dispatch(setToken(credentials.accessToken));
      dispatch(setIsLoading(false));
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    try {
      await clearSession();
      dispatch(setToken(''));
    } catch (e) {
      console.log('Log out cancelled');
    }
  };
  return { login, logout, checkIfLoggedIn };
};
