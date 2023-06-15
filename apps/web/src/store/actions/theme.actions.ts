import { createAction } from '@reduxjs/toolkit';

export const setThemeAction = createAction<string, string>('setTheme');
export const toggleThemeAction = createAction('toggleTheme');
