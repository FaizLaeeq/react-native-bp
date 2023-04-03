import { RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type StackParamsList = {
  Home: undefined;
  Authenticate: undefined;
  Loading: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<StackParamsList, 'Home'>;
export type AuthenticateScreenProps = NativeStackScreenProps<
  StackParamsList,
  'Authenticate'
>;

export type HomeNavigationProps = NativeStackNavigationProp<
  StackParamsList,
  'Home'
>;
export type AuthenticateNavigationProps = NativeStackNavigationProp<
  StackParamsList,
  'Authenticate'
>;

export type HomeRouteProps = RouteProp<StackParamsList, 'Home'>;
export type AuthenticationRouteProps = RouteProp<
  StackParamsList,
  'Authenticate'
>;
