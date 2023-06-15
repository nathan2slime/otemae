import api from '@/api';

import { animeBuilder } from './builders/anime.builders';
import { AnimesResponse } from './types/anime.types';

export const getTopAnimesService = async () => {
  const { data } = await api.get<AnimesResponse>('/top/anime');

  if (data) return animeBuilder(data);
};

export const searchAnimesService = async (payload: string) => {
  const { data } = await api.get<AnimesResponse>('/anime?q=' + payload);

  if (data) return animeBuilder(data);
};
