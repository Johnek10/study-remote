import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students/:A')
      .then(({ data: { students } }) => {
        setUsers(students);
        console.log('provider');
        console.log(students);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  const handleAddUser = (values) => {
    setUsers([
      ...users,
      {
        name: values.name,
        attendance: values.attendance,
        average: values.average,
      },
    ]);
  };
  const deleteUser = (name) => {
    const filteredUser = users.filter((element) => element.name !== name);
    console.log(filteredUser);
    setUsers(filteredUser);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
