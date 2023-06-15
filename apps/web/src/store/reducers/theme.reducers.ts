import { AnyAction, createReducer } from '@reduxjs/toolkit';

import { setThemeAction, toggleThemeAction } from '@/store/actions/theme.actions';

const INITIAL: string = localStorage.getItem('theme') || 'dark';

export default createReducer<string>(INITIAL, builder => {
  builder
    .addCase<string, AnyAction>(setThemeAction.type, (__, action) => {
      const theme = action.payload;

      localStorage.setItem('theme', theme);

      return theme;
    })
    .addCase(toggleThemeAction.type, state => {
      const theme = state == 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', theme);

      return theme;
    });
});
