import { List } from './FriendList.styled';
import { FriendCard } from '../FriendCard/FriendCard';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, friendName, id, isOnline }) => (
        <FriendCard
          avatar={avatar}
          friendName={friendName}
          key={id}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      friendName: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
