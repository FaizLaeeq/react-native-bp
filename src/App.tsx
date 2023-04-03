import React from 'react';
import { Auth0Provider } from 'react-native-auth0';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigator from './Navigator';

const App = () => (
  <Provider store={store}>
    <Auth0Provider
      domain={process.env.AUTH_DOMAIN || ''}
      clientId={process.env.AUTH_CLIENT_ID || ''}
    >
      <Navigator />
    </Auth0Provider>
  </Provider>
);

export default App;
