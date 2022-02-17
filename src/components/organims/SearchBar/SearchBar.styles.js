import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({theme})=>theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
  ${Input} {
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 30px;
`;
