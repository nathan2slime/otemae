import { createAction } from '@reduxjs/toolkit';

import { Anime } from '@/services/types/anime.types';

export const setAnimesAction = createAction<Anime[], string>('setAnimes');
export const setIsLoadingAnimesAction = createAction<boolean, string>(
  'setIsLoadingAnimes'
);
export const setIsSearchAnimesAction = createAction<boolean, string>('setIsSearchAnimes');
