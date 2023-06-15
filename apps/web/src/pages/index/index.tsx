import { useEffect, useState } from 'react';
import { MaeCard, MaeGhostLoader, MaeModal } from '@mae/core';
import { useDispatch, useSelector } from 'react-redux';

import { NoSearchResults } from '@/components/no-search-results';
import { ViewAnime } from '@/components/view-anime';

import { getTopAnimesService } from '@/services/anime.services';
import { setAnimesAction } from '@/store/actions/anime.actions';
import { Anime } from '@/services/types/anime.types';
import { AppState } from '@/store';

import './styles.scss';

const Index = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [viewAnime, setViewAnime] = useState<Anime>();
  const {
    anime: {
      animes: { isLoading: loading, data: animes },
    },
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    getTopAnimesService().then(animes => animes && dispatch(setAnimesAction(animes)));
  }, []);

  const ghostLoaders = Array.from({ length: 13 }, (_, i) => i);

  const onViewAnime = (anime: Anime) => {
    setOpenModal(true);
    setViewAnime(anime);
  };

  return (
    <div className="index-container">
      <MaeModal open={openModal} onClose={() => setOpenModal(false)}>
        {viewAnime && <ViewAnime anime={viewAnime} onClose={() => setOpenModal(false)} />}
      </MaeModal>

      {animes && !loading && animes.length == 0 && <NoSearchResults />}

      <div className="animes">
        {loading
          ? ghostLoaders.map(value => <MaeGhostLoader key={value} />)
          : animes &&
            animes.map(anime => (
              <MaeCard key={anime.id} {...anime} onClick={() => onViewAnime(anime)} />
            ))}
      </div>
    </div>
  );
};

export default Index;
