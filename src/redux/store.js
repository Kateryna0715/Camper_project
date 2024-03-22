import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { campersReducer } from './campers/operations';
import { persistReducerFavorites } from './favorites/favoritesSlice';
// import { filterReducer } from './boards/filterSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: persistReducerFavorites,
    // filter: filterReducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
