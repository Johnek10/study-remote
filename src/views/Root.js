import UsersList from 'components/organims/UsersList/UsersList';
import React, { useState } from 'react';
import { users as userData } from 'data/users.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate';
import Dashboard from 'views/Dashboard';
import AddUser from 'views/AddUser';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const Root = () => {
  const [users, setUsers] = useState(userData);
  const [formsValue, setFormsValue] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  const handleAddUser = (values) => {
    setUsers([
      ...users,
      {
        name: values.name,
        attendance: values.attendance,
        average: values.average,
      },
    ]);
    setFormsValue({
      name: '',
      attendance: '',
      average: '',
    });
  };
  const deleteUser = (name) => {
    const filteredUser = users.filter((element) => element.name !== name);
    setUsers(filteredUser);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersContext.Provider
            value={{
              users,
              handleAddUser,
              deleteUser,
            }}
          >
            <Wrapper>
              <Switch>
                <Route path="/add-user" exact>
                  <AddUser />
                </Route>
                <Route path="/">
                  <Dashboard deleteUser={deleteUser} users={users} />
                </Route>
              </Switch>
            </Wrapper>
          </UsersContext.Provider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
