import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organims/UsersList/UsersList';
import { UsersContext } from 'providers/UsersProviders';



const Dashboard = () => {
  const {users}=useContext(UsersContext);
  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;