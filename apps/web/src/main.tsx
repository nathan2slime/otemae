import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './app';

import { store } from './store';

const root = document.getElementsByTagName('app')[0] as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
