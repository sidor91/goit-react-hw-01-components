import styled from 'styled-components';

export const Wrapper = styled.li`
  list-style: none;
  display: flex; 
//   justify-content: center;
align-items: center;
height: 60px;
border: 1px solid black;
margin-top: 5px;
margin-bottom: 5px;
padding: 10px;
`;
export const Status = styled.span`
display: block;
width: 20px;
height:20px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  margin-right: 10px;
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;
export const Name = styled.p`
  color: black;
  margin-right: 10px;
`;