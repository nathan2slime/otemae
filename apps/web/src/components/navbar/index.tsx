import { useEffect, useState } from 'react';
import { MaeModal, MaeSearch } from '@mae/core';
import Icon from 'react-inlinesvg';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { AppState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

import { getTopAnimesService, searchAnimesService } from '@/services/anime.services';
import { setAnimesAction, setIsLoadingAnimesAction } from '@/store/actions/anime.actions';
import { toggleThemeAction } from '@/store/actions/theme.actions';

import sushi from '@/assets/sushi.svg';

import './styles.scss';

const Navbar = () => {
  const schema = yup.object().shape({
    search: yup.string().required(),
  });
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const { theme } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const {
    register,
    setValue,
    formState: { isValid },
    watch,
  } = useForm({
    mode: 'all',
    defaultValues: { search: '' },
    resolver: yupResolver(schema),
  });

  const form = watch();

  useEffect(() => {
    register('search');
  }, [register]);

  const onSearchAnime = () => {
    if (isValid) {
      setOpenSearchModal(false);

      dispatch(setIsLoadingAnimesAction(true));

      searchAnimesService(form.search).then(
        data => data && dispatch(setAnimesAction(data))
      );
    }
  };

  const getTopAnimes = async () => {
    dispatch(setIsLoadingAnimesAction(true));

    const animes = await getTopAnimesService();
    animes && dispatch(setAnimesAction(animes));
    setValue('search', '');
  };

  const toggleTheme = () => dispatch(toggleThemeAction());

  const search = (
    <MaeSearch
      value={form.search}
      active={isValid}
      placeholder="Search a anime"
      onSearch={() => onSearchAnime()}
      onChange={e => setValue('search', e, { shouldValidate: true })}
    />
  );

  return (
    <>
      <MaeModal
        className="search-modal"
        open={openSearchModal}
        onClose={() => setOpenSearchModal(false)}
      >
        <div className="search-modal-container">{search}</div>
      </MaeModal>

      <header className="header-container">
        <Icon src={sushi} onClick={() => getTopAnimes()} />

        <div className="toggle-theme-container">
          {search}

          {theme == 'dark' ? (
            <i className="ri-sun-fill" onClick={toggleTheme} />
          ) : (
            <i className="ri-moon-fill" onClick={toggleTheme} />
          )}

          <i className="ri-search-eye-line" onClick={() => setOpenSearchModal(true)} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
