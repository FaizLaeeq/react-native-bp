import { View, Button, Text, StyleSheet } from 'react-native';
import { useAuth0 } from 'react-native-auth0';
import { styles } from './styles';

const Home = () => {
  const { authorize, clearSession, user } = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({ scope: 'openid profile email' });
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  const loggedIn = user !== undefined && user !== null;

  return (
    <View style={styles.container}>
      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}
      <Button onPress={loggedIn ? onLogout : onLogin} title={loggedIn ? 'Log Out' : 'Log In'} />
    </View>
  );
};

export default Home;
