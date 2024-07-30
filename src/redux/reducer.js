import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';
import { modalReducer } from './modal/slice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
  modal: modalReducer,
});
