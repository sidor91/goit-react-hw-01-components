import { Wrapper, Avatar, Name, Status } from './FriendCard.styled';



export const FriendCard = ({avatar, friendName, isOnline}) => {
    return (
     <Wrapper>
        <Status isOnline={isOnline}/>
        <Avatar src={avatar} />
        <Name>{friendName}</Name>
     </Wrapper>
    );
}



