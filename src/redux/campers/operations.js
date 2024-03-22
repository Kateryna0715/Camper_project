import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://658d43a27c48dce94738cfe0.mockapi.io/adverts';

export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getById',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.patch(`/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
