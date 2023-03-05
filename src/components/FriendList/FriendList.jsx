import { List } from './FriendList.styled';
import { FriendCard } from 'components/FriendCard/FriendCard';

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