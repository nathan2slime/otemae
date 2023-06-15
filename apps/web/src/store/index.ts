import { AnimeState } from '@/services/types/anime.types';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import animesReducers from './reducers/anime.reducers';
import themeReducers from './reducers/theme.reducers';

export type AppState = {
  theme: string;
  anime: AnimeState;
};

const reducer = combineReducers<AppState>({
  theme: themeReducers,
  anime: animesReducers,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
