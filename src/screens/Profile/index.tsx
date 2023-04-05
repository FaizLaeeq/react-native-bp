import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuthentication } from '../Authenticate/useAuthentication';
import { styles } from './styles';

const Profile = () => {
  const { logout } = useAuthentication();
  return (
    <View style={styles.container}>
      <Button mode='contained' uppercase onPress={() => logout()}>
        Log Out
      </Button>
    </View>
  );
};

export default Profile;
