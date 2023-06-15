import { ViewAnimeProps } from './model';

import './styles.scss';

export const ViewAnime = ({
  anime: { cover, title, description, popularity, rank, source },
  onClose,
}: ViewAnimeProps) => {
  const coverStyles = { backgroundImage: `url(${cover})` };

  const labels = [
    {
      name: 'Rank',
      value: rank,
    },
    {
      name: 'Popularity',
      value: popularity,
    },
    {
      name: 'Source',
      value: source,
    },
  ];

  return (
    <div className="view-anime-container">
      <div>
        <div className="cover-anime" style={coverStyles} />

        <div className="title-anime">
          <h3>{title}</h3>

          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>

      <i className="ri-close-line" onClick={() => onClose()} />

      <div className="badge-anime">
        {labels.map(
          ({ value, name }, index) =>
            value && (
              <div key={index}>
                <p>{name}</p>
                <div />
                <span> {value}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};
