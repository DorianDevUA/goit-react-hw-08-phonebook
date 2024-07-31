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

const create = createAsyncThunk(
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

const contactsOperations = {
  getAll,
  create,
};

export default contactsOperations;
