import { AnyAction, createReducer } from '@reduxjs/toolkit';

import { AnimeState } from '@/services/types/anime.types';
import {
  setAnimesAction,
  setIsSearchAnimesAction,
  setIsLoadingAnimesAction,
} from '../actions/anime.actions';

const INITIAL: AnimeState = {
  animes: {
    isSearch: false,
    isLoading: true,
  },
};

export default createReducer<AnimeState>(INITIAL, builder => {
  builder
    .addCase<string, AnyAction>(setAnimesAction.type, (state, action) => ({
      ...state,
      animes: {
        data: action.payload,
        isLoading: false,
        isSearch: false,
      },
    }))
    .addCase<string, AnyAction>(setIsLoadingAnimesAction.type, (state, action) => ({
      ...state,
      animes: { ...state.animes, isLoading: action.payload },
    }))
    .addCase<string, AnyAction>(setIsSearchAnimesAction.type, (state, action) => ({
      ...state,
      animes: { ...state.animes, isSearch: action.payload },
    }));
});
