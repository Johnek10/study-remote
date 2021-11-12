import React, { useState } from 'react';
import { users as userData } from 'data/users';
export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(userData);
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
