import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users.js';
import Button from 'components/atoms/Button/Button';
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
  const [formsValue, setFormsValue] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  const handleName = (e) => {
    console.log(e.target.name);
    setFormsValue({
      ...formsValue,
      [e.target.name]: e.target.value, //overwritten existed key
    });
  };

  const handleAddUser=(e)=>{
    e.preventDefault();
    setUsers([
      ...users,{
        name: formsValue.name,
        attendance: formsValue.attendance,
        average: formsValue.average,
      }
    ])
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
      <Wrapper as="form" onSubmit={handleAddUser}>
        <FormField
          label="Name"
          id="name"
          name="name"
          value={formsValue.name}
          onChange={handleName}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          value={formsValue.attendance}
          onChange={handleName}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          value={formsValue.average}
          onChange={handleName}
        />
        <Button></Button>
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
