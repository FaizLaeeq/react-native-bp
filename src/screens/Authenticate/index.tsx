import { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { setAuthUser, setToken } from '../../redux/authSlice';
import { useAppDispatch } from '../../redux/store';
import { styles } from './styles';
import { onLogin, onLogout } from './utils';

const Authenticate = () => {
  const { authorize, clearSession, user, getCredentials } = useAuth0();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setAuthUser(user));
      getCredentials().then((res) => dispatch(setToken(res.accessToken)));
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Text>
        {user ? `You are logged in as ${user.name}` : 'You are not logged in'}
      </Text>
      <Button
        onPress={() => (user ? onLogout(clearSession) : onLogin(authorize))}
        title={user ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};

export default Authenticate;
