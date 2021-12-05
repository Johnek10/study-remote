import React from 'react';
import Navigation from 'components/organims/Navigation/Navigation';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/templates/MainTemplate.style';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border: 1px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 35px;
  ${Input}
`;
const News = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border: 2px solid #ffa51f;
`;

const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 30px;
`;
const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Student</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <News>
        <p>Lorem Ipsum</p>
      </News>
    </Wrapper>
  );
};

export default MainTemplate;
