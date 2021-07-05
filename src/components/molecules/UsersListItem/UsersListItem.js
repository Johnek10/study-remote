import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
//import StyledAverage from 'components/atoms/Average/Average';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';

const showIndex = (index) => {
  console.log(`Index: +${index}`);
};

const UsersListItem = (props) => (
  <Wrapper>
    <StyledAverage number={props.userData.average} />
    <StyledInfo>
      <p>{props.userData.name}</p>
      <p>{props.userData.attendance}</p>
    </StyledInfo>
    <Button onClick={() => showIndex(props.index)} />
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
