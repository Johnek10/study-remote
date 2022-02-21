import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
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

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  z-index: 2;
  position: absolute;
  max-height: 500px;
  padding: 10px;
  border-radius: 10px;
  list-style: none;

  width: 100%;
  left: 0;
  top: 50px;
  display: flex;
  flex-direction: column;
  top: 35px;
  left: 7px;
  background-color: ${({ theme }) => theme.colors.grey};

  li {
    font-weight: bold;

    width: 100%;
    padding: 20px 10px;
  }
`;
