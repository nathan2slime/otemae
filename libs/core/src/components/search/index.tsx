import classNames from 'classnames';

import { MaeSearchProps } from './model';

import './styles.scss';

export const MaeSearch = (props: MaeSearchProps) => {
  const { value, className, onChange, active, onSearch } = props;

  return (
    <div
      className={classNames({
        'mae-search-container': true,
        [className || '']: true,
        active,
      })}
    >
      <input
        {...props}
        value={value}
        onKeyDown={e => e.key == 'Enter' && onSearch()}
        onChange={e => onChange(e.target.value)}
      />

      <button onClick={() => onSearch()}>
        <i className="ri-search-eye-line" />
      </button>
    </div>
  );
};
