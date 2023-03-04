import css from './UserProfile.module.css';
import PropTypes from 'prop-types';

export const UserProfile = ({ username, tag, location, avatar, stats }) => {
    return (
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt={username} className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.statsItem}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li className={css.statsItem}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
}

UserProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

