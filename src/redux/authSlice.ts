import {createSlice} from '@reduxjs/toolkit';
import {User} from '../types';

interface AuthSlice {
  token: string;
  user: User;
  error: string;
}
const initialState: AuthSlice = {
  token: '',
  user: {name: '', email: ''},
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

export const {setToken, setAuthUser} = authSlice.actions;

export default authSlice.reducer;
