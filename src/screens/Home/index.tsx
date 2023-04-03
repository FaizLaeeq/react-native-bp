import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../Profile';
import Welcome from '../Welcome';
import { styles } from './styles';

const HomeIcon = (color: string) => (
  <MaterialCommunityIcons name='home' color={color} size={26} />
);
const ProfileIcon = (color: string) => (
  <MaterialCommunityIcons name='account' color={color} size={26} />
);
const VideoIcon = (color: string) => (
  <MaterialCommunityIcons name='video' color={color} size={26} />
);

const Home = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName='Welcome'
      barStyle={styles.bottomTabBar}
      labeled={false}
      shifting={true}
    >
      <Tab.Screen
        name='Welcome'
        component={Welcome}
        options={{
          tabBarIcon: ({ color }) => HomeIcon(color),
          tabBarBadge: true,
        }}
      />
      <Tab.Screen
        name='Event'
        component={Profile}
        options={{
          tabBarLabel: 'Event',
          tabBarIcon: ({ color }) => VideoIcon(color),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => ProfileIcon(color),
        }}
      />
    </Tab.Navigator>
  );
};
export default Home;
