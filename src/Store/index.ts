import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './Slice/AuthSlice';

export const store = configureStore({
  reducer: {authenticationDetails: AuthSlice},
});

export type AuthStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;