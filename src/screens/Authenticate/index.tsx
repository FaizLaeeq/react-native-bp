import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { authState } from '../../redux/selectors';
import { useAppSelector } from '../../redux/store';
import { styles } from './styles';
import { useAuthentication } from './useAuthentication';

const Authenticate = () => {
  const { login } = useAuthentication();
  const { isLoading } = useAppSelector(authState);

  return (
    <View style={styles.container}>
      <Text>You are not logged in</Text>
      <Button mode='contained' loading={isLoading} uppercase onPress={login}>
        Log In
      </Button>
    </View>
  );
};

export default Authenticate;
