import { Button, Text, View } from 'react-native';
import { useAuthentication } from '../Authenticate/useAuthentication';
import { styles } from './styles';

const Profile = () => {
  const { logout } = useAuthentication();
  return (
    <View style={styles.container}>
      <Button onPress={() => logout()} title='Log Out' />
    </View>
  );
};

export default Profile;
