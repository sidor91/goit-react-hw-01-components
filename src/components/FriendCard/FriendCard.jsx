import { Wrapper, Avatar, Name, Status } from './FriendCard.styled';
import PropTypes from 'prop-types';


export const FriendCard = ({avatar, friendName, isOnline}) => {
    return (
     <Wrapper>
        <Status isOnline={isOnline}/>
        <Avatar src={avatar} />
        <Name>{friendName}</Name>
     </Wrapper>
    );
}

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

