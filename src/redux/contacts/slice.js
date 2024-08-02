import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsOperations.getAll.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(
        contactsOperations.createContact.fulfilled,
        (state, { payload }) => {
          state.items.push(payload);
        },
      )
      .addCase(
        contactsOperations.deleteContact.fulfilled,
        (state, { payload }) => {
          state.items = state.items.filter(item => item.id !== payload.id);
        },
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
