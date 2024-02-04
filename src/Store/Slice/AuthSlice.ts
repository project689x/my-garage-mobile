import {createSlice} from '@reduxjs/toolkit';
export interface IAuthSlice {
  isAuthenticated: boolean;
}
const initialState: IAuthSlice = {
  isAuthenticated: false,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    },
  },
});

export const {setAuthenticated} = AuthSlice.actions;

export default AuthSlice.reducer;
