import { createSlice } from '@reduxjs/toolkit';
import { getAllCampers, getCamperById } from './operations';

const initialState = {
  campers: [],
  selectedCamper: {},
  isLoading: false,
  error: null,
};
const hadlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllCampers.pending, hadlePending)
      .addCase(getAllCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllCampers.rejected, handleError)

      .addCase(getCamperById.pending, hadlePending)
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.error = null;
        state.isLoading = false;
      })

      .addCase(getCamperById.rejected, handleError),
});

export const campersReducer = campersSlice.reducer;
