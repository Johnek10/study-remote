import React from 'react';
import Navigation from 'components/organims/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.style';
import SearchBar from 'components/organims/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;
