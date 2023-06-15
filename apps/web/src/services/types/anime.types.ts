export type AnimesResponse = {
  data: [
    {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      title_english: string;
      title_japanese: string;
      title_synonyms: string[];
      title: string;
      type: string;
      source: string;
      episodes: number;
      status: string;
      airing: true;
      duration: string;
      rating: string;
      score: number;
      scored_by: number;
      rank: number;
      popularity: number;
      members: number;
      favorites: number;
      synopsis: string;
      background: string;
      season: string;
      year: number;
    }
  ];
  pagination: {
    last_visible_page: number;
    has_next_page: true;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
};

export type Anime = {
  title: string;
  cover: string;
  rank: number;
  id: number;
  description: string;
  source: string;
  popularity: number;
  score: number;
  duration: string;
  year: number;
};

export type Animes = {
  isLoading: boolean;
  isSearch: boolean;
  data?: Anime[];
};

export type AnimeState = {
  animes: Animes;
  view?: Anime;
};
