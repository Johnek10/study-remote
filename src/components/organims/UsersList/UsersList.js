import React from 'react';
import users from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';

/* const fun = () => {
  return <div>JanM</div>;
}; */

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, i) => (
        <UsersListItem index={i} userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

export default UsersList;
