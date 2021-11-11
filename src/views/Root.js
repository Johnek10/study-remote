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
import UsersProvider from 'providers/UsersProviders';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
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
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
export default Root;
