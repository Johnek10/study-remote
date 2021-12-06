import React from 'react';
import Navigation from 'components/organims/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate.style';
import styled from 'styled-components';
import SearchBar from 'components/organims/SearchBar/SearchBar';

const News = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border: 2px solid #ffa51f;
`;

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
