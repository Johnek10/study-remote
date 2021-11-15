import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
const UsersList = ({ users }) => {
  return (
    <>
      <Wrapper>
        <h1>User's list</h1>
        <ul>
          {users.map((userData, index) => (
            <UsersListItem key={userData.name} userData={userData} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;
