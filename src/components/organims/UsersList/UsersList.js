import React from 'react';
import users from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
class UsersList extends React.Component{
  render(){
    return(
      <Wrapper>
    <ul>
      {users.map((userData, index) => (
        <UsersListItem index={index} userData={userData} />
      ))}
    </ul>
  </Wrapper>
    )
  }
}
/* const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, index) => (
        <UsersListItem index={index} userData={userData} />
      ))}
      
    </ul>
  </Wrapper>
); */

export default UsersList;
