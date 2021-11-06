import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UserList.styles';
import { FormField } from 'components/molecules/FormField/FormField';
const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...usersData]);
      reject({ error: 'message' });
    }, 2000);
  });
};

const UsersList = () => {
  console.log(usersData);
  // console.log(useState([]));
  const [users, setUsers] = useState([]);
  console.log(users);
  const [isLoading, setLoading] = useState([]);
  //console.log(isLoading);
  /*console.log('tableState')
  const tableState=useState(''); 
  console.log(tableState);*/
  const [nameValue, setNameValue]=useState('');

  const handleName=(e)=>{
    //console.log('dupa')
    setNameValue(e.target.value);
    console.log(nameValue)
  }

  useEffect(() => {
    setLoading(true);
    mockAPI()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    console.log('Changed sth in loading state');
  }, [isLoading]);
  const deleteUser = (name) => {
    const filteredUser = users.filter((element) => element.name !== name);
    setUsers(filteredUser);
  };
  return (
    <>
      <Wrapper>
        <FormField label="Name" id="name" name="name" value={nameValue} onChange={handleName}/>
        <FormField label="Attendance" id="attendance" name="name"/>
        <FormField label="Average" id="average" name="name"/>
      </Wrapper>
      <Wrapper>
        <h1>{isLoading ? 'Loading...' : "User's list"}</h1>
        <ul>
          {users.map((userData, index) => (
            <UsersListItem
              deleteUser={deleteUser}
              index={index}
              userData={userData}
            />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;
