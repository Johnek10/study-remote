import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
//import StyledAverage from 'components/atoms/Average/Average';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
import { UsersContext } from 'providers/UsersProviders';

const UsersListItem = ({ userData: { name, average, attendance } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <StyledAverage number={average} />
      <StyledInfo>
        <p>{name}</p>
        <p>{attendance}</p>
      </StyledInfo>
      <DeleteButton
        onClick={() => {
          deleteUser(name);
        }}
      />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
