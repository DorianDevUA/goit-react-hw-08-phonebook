import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(
        authOperations.getCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = { ...payload };
          state.isLoggedIn = true;
        },
      )
      .addCase(authOperations.getCurrentUser.rejected, state => {
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
