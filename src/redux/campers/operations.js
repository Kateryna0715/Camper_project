import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://658d43a27c48dce94738cfe0.mockapi.io';

export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async ({ page }, thunkApi) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=4`);
      return data;
    } catch (error) {
      alert(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getById',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.patch(`/adverts${id}`);

      return data;
    } catch (error) {
      alert(error.message);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
