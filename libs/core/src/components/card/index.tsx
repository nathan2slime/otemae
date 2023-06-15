import { MaeCardProps } from './model';

import './styles.scss';

export const MaeCard = ({ cover, title, year, score, ...props }: MaeCardProps) => {
  const coverStyles = { backgroundImage: `url(${cover})` };

  return (
    <div className="mae-card-container" {...props}>
      <div style={coverStyles} />

      <div>
        <h3>{title}</h3>

        <div>
          {year && <p className="year">{year}</p>}
          {score && <p className="score">{score}</p>}
        </div>
      </div>
    </div>
  );
};
