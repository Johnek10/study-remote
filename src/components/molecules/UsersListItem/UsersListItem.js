import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
//import StyledAverage from 'components/atoms/Average/Average';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';

const showIndex = (index) => {
  console.log(`Index: +${index}`);
};

const UsersListItem = ({deleteUser, userData: {name, average, attendance}, index}) => (
  <Wrapper>
    <StyledAverage number={average} />
    <StyledInfo>
      <p>{name}</p>
      <p>{attendance}</p>
    </StyledInfo>
    <Button onClick={()=>{deleteUser(name)}} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
