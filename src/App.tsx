import React from 'react';
import { Auth0Provider } from 'react-native-auth0';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './redux/store';
import Navigator from './Navigator';
import { theme } from './styles';

const App = () => (
  <StoreProvider store={store}>
    <PaperProvider theme={theme}>
      <Auth0Provider
        domain={process.env.AUTH_DOMAIN || ''}
        clientId={process.env.AUTH_CLIENT_ID || ''}
      >
        <Navigator />
      </Auth0Provider>
    </PaperProvider>
  </StoreProvider>
);

export default App;
