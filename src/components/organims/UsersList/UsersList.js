import React from 'react';
import users from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';

/* const fun = () => {
  return <div>JanM</div>;
}; */

class UsersList extends React.Component {
  state = {
    title: true,
    users,
  };
  deleteUser = (name) => {
    const filterusers = this.state.users.filter(user => user.name !== name);
    console.log(filterusers);
    this.setState({users: filterusers});
  };
  render() {
    console.log(this);
    return (
      <Wrapper>
        <h3>{this.state.title ? `User's list` : 'Students list'}</h3>
        <ul>
          {this.state.users.map((userData, index) => (
            <UsersListItem index={index} userData={userData} deleteUser={this.deleteUser} />
          ))}
        </ul>
      </Wrapper>
    );
  }
  testTog() {
    this.setState((prevstate) => ({ title: !prevstate.title }));
  }
}

/* 
const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData, index) => (
        <UsersListItem index={index} userData={userData} />
      ))}
    </ul>
  </Wrapper>
); */

export default UsersList;
