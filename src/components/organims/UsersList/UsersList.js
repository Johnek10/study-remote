import React from 'react';
import users from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...users]);
      reject({ error: 'message' });
    }, 2000);
  });
};
class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: true,
  };
  componentDidMount() {
  
    mockAPI()
      .then((data) => {
        this.setState({isLoading: false})
        this.setState({users: data});
      })
      .catch((e) => {
        console.log(e);
      });
  }
  componentDidUpdate = (prevState) => {
    if(prevState.isLoading !== this.state.isLoading){
      console.log('dupa')
    }
  };
  componentWillUnmount = () => {};
  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => name !== user.name);
    this.setState({ users: filteredUsers });
    console.log(this.state.users);
  };
  render() {
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading...' : "User's list"}</h1>
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
