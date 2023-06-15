import { AnimesResponse, Anime } from '../types/anime.types';

export const animeBuilder = (data: AnimesResponse) =>
  data.data.map(anime => ({
    title: anime.title || anime.title_english || anime.title_japanese,
    cover: anime.images.jpg.large_image_url,
    duration: anime.duration,
    rank: anime.rank,
    score: anime.score,
    year: anime.year,
    id: anime.mal_id,
    description: anime.synopsis,
    popularity: anime.popularity,
    source: anime.source,
  })) as Anime[];
