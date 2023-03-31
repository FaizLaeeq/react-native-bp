import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const authState = createSelector(
  (store: RootState) => store.auth,
  (auth) => auth
);
