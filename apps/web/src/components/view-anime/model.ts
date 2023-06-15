import { Anime } from '@/services/types/anime.types';

export type ViewAnimeProps = {
  anime: Anime;
  onClose: () => void;
};
