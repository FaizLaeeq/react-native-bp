import { AuthorizeOptions, AuthorizeParams } from 'react-native-auth0';

export const onLogin = async (
  authorize: (
    parameters?: AuthorizeParams | undefined,
    options?: AuthorizeOptions | undefined
  ) => Promise<void>
) => {
  try {
    await authorize({ scope: 'openid profile email' });
  } catch (e) {
    console.log(e);
  }
};

export const onLogout = async (clearSession: () => Promise<void>) => {
  try {
    await clearSession();
  } catch (e) {
    console.log('Log out cancelled');
  }
};
