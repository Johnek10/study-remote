import React from 'react';
import users from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
class UsersList extends React.Component {
  state = {
    users,
  };
  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => name !== user.name);
    this.setState({ users: filteredUsers });
    console.log(this.state.users);
  };
  render() {
    return (
      <Wrapper>
        <ul>
          {this.state.users.map((userData, index) => (
            <UsersListItem
              deleteUser={this.deleteUser}
              index={index}
              userData={userData}
            />
          ))}
        </ul>
      </Wrapper>
    );
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
