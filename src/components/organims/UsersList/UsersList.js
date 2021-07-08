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
  };
  toggleTitle = () => {
    this.setState((prevstate)=>({title: !prevstate.title }));
  };
  
  render() {
    console.log(this);
    return (
      <Wrapper>
        <h3>{this.state.title ? `User's list` : 'Students list'}</h3>
        <ul>
          {users.map((userData, index) => (
            <UsersListItem index={index} userData={userData} />
          ))}
        </ul>
        <button onClick={this.toggleTitle}>Change title</button>
      </Wrapper>
    );
    
  }
  testTog() {
    this.setState((prevstate)=>({title: !prevstate.title }));
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
