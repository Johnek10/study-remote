import React, { useEffect, useState, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organims/UsersList/UsersList';
import { Link, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import { UsersContext } from 'providers/UsersProviders';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
  const { id } = useParams();
  const { students, groups } = useStudents();
  console.log(groups);
  console.log(id);
  if (!id) {
    return <Redirect to={`group/${groups[0]}`} />;
  }

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link to={`/group/${group}`}>{group}</Link>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
