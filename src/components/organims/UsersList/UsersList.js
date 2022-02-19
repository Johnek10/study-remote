import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = ({ users }) => {
  return (
    <>
      <h1>Students list</h1>
      <ul>
        {users.map((userData, index) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
