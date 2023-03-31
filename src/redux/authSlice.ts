import { createSlice } from '@reduxjs/toolkit';
import { UserInfo } from 'react-native-auth0';

interface AuthSlice {
  token: string;
  user: UserInfo | null;
  error: string;
}
const initialState: AuthSlice = {
  token: '',
  user: null,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAuthUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setAuthUser } = authSlice.actions;

export default authSlice.reducer;
