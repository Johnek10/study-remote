import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = (props) => (
  <Wrapper>
    <div>{props.userData.average}</div>
    <div>
      <p>{props.userData.name}</p>
      <p>{props.userData.attendance}</p>
    </div>

    <Button />
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
