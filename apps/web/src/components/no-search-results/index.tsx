import Icon from 'react-inlinesvg';

import ghost from '@/assets/ghost.svg';

import './styles.scss';

export const NoSearchResults = () => {
  return (
    <div className="no-search-results-container">
      <Icon src={ghost} />

      <h4>No anime found</h4>
    </div>
  );
};
