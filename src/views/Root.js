import UsersList from 'components/organims/UsersList/UsersList';
import Form from 'components/organims/Form/Form';
import { useState } from 'react';
import { users as userData } from 'data/users.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
//import Dupa from '../components/organims/dupa/dupa';

const Root = () => {
  const [users, setUsers] = useState(userData);
  //console.log(users);
  //setUsers(userData)
  //const [isLoading, setLoading] = useState([]);
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

  const handleAddUser = (e) => {
    console.log('dupa')
    e.preventDefault();
    setUsers([
      ...users,
      {
        name: formsValue.name,
        attendance: formsValue.attendance,
        average: formsValue.average,
      },
    ]);
    setFormsValue({
      name: '',
      attendance: '',
      average: '',
    })
  };

  const deleteUser = (name) => {
    console.log('dupa')
    const filteredUser = users.filter((element) => element.name !== name);
    setUsers(filteredUser);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add</Link>
          </nav>
          <Switch>
            <Route path="/" exact>
              <UsersList deleteUser={deleteUser} users={users} />
            </Route>
            <Route path="/add-user">
              <Form
                handleAddUser={handleAddUser}
                handleName={handleName}
                formsValue={formsValue}
              />
              </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};
export default Root;

// <GlobalStyle>
//   <Wrapper>
//<UsersList />
//</Dupa>
//   </Wrapper>
// </GlobalStyle>
