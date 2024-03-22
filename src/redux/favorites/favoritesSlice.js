import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter(el => el._id !== action.payload);
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
const favoritesReducer = favoritesSlice.reducer;

const persistConfigFavorites = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const persistReducerFavorites = persistReducer(
  persistConfigFavorites,
  favoritesReducer
);
