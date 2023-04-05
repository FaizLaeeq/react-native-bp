import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { authState } from './redux/selectors';
import { useAppSelector } from './redux/store';
import Authenticate from './screens/Authenticate';
import { useAuthentication } from './screens/Authenticate/useAuthentication';
import Home from './screens/Home';
import { StackParamsList } from './types/navigatorTypes';

const Navigator = () => {
  const Stack = createNativeStackNavigator<StackParamsList>();
  const { token } = useAppSelector(authState);
  const { checkIfLoggedIn } = useAuthentication();

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  return (
    <NavigationContainer>
      {token ? (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName='Authenticate'>
          <Stack.Screen
            name='Authenticate'
            component={Authenticate}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
export default Navigator;
