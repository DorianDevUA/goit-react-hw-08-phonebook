import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAll = createAsyncThunk('contacts/getAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    console.log('AllData:', response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const createContact = createAsyncThunk(
  'contacts/create',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      console.log('CreateData:', response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const contactsOperations = {
  getAll,
  createContact,
  deleteContact,
};

export default contactsOperations;
