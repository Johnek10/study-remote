import React, { useState, useEffect } from 'react';
import { Button } from 'components/atoms/Button/Button';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
import { FormField } from 'components/molecules/FormField/FormField'
const UsersList = ({users}) => {
  return (
    <>
      <Wrapper>
        <h1>User's list</h1>
        <ul>
          {users.map((userData, index) => (
            <UsersListItem
              index={index}
              userData={userData}
            />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;
