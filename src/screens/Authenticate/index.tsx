import { View, Button, Text } from 'react-native';
import { styles } from './styles';
import { useAuthentication } from './useAuthentication';

const Authenticate = () => {
  const { login } = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>You are not logged in</Text>
      <Button onPress={login} title='Log In' />
    </View>
  );
};

export default Authenticate;
