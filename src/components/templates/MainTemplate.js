import React from 'react';
import Navigation from 'components/organims/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate.style';
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
