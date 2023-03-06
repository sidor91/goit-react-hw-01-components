import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { getColor } from '../../utils/getColor';

export const Statistics = ({ title, data }) => {
  return (
    <section className={css.statList}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statistics}>
        {data.map(({ id, label, percentage }, index) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: getColor(index) }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
