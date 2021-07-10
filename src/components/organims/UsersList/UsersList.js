import React from 'react';
import users from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';

/* const fun = () => {
  return <div>JanM</div>;
}; */


const mockApi=(success)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(users){
        resolve([...users]);
      }
      else{
        reject({message: 'Error'});
      }
    },2000);
  });
}






class UsersList extends React.Component {
  state = {
    title: true,
    users: [],
    isLoading: false,
  };

  componentDidMount(){
    this.setState({isLoading: true});
    mockApi()
    .then(data=>{
      this.setState({isLoading: false});
      this.setState( {users: data});
    })
    .catch(error=>console.log(error))
  }
  componentDidUpdate(prevstate){
    if(prevstate.isLoading !=this.state.isLoading){
      console.log('dupa changed');
    }
  }

  deleteUser = (name) => {
    const filterusers = this.state.users.filter(user => user.name !== name);
    console.log(filterusers);
    this.setState({users: filterusers});
  };
  render() {
    console.log(this);
    return (
      <Wrapper>
        <h3>{this.state.isLoading ? 'Loading...' : 'Students list'}</h3>
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
