import styled from 'styled-components';


export const TransactionTable = styled.table`
  width: 100%;
  border-spacing: 1px;
`;

export const TableHead = styled.thead`

`;
export const Row = styled.tr`
background-color: ${(p) => {return p.colored ? 'rgb(237, 241, 243)' : 'white'}}
`;
export const HeadTitle = styled.th`
  width: calc(100% / 3);
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(85, 186, 210);
  color: white;
  font-size: 24px;
`;
export const TableBody = styled.tbody`

`;
export const TableData = styled.td`
  text-align: center;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
`;