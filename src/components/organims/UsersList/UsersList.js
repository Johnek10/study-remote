import React, { useState, useEffect } from 'react';
import usersData from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';

/* const fun = () => {
  return <div>JanM</div>;
}; */

const mockApi = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

/* 
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
 */

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [isLoading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    mockApi()
      .then((data) => {
        setLoading(false);
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(()=>{
    console.log('Loading finished');
  }, [isLoading]);
  
  console.log(users);
  console.log(useState([]));
  const deleteUser = (name) => {
    const filterusers = users.filter((user) => user.name !== name);
    console.log(filterusers);
    setUsers(filterusers);
  };
  return (
    <Wrapper>
      <h1>{isLoading ? '...Loading' : `User's list`}</h1>
      {users.map((usersData) => {
        console.log(usersData);
        return <UsersListItem deleteUser={deleteUser} userData={usersData} />;
      })}
    </Wrapper>
  );
};

export default UsersList;
