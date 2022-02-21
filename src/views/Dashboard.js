import React, { useEffect, useState, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organims/UsersList/UsersList';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Wrapper, StudentsWrapper, TitleWrapper } from './Dashborad.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
  const { id } = useParams();
  const { students, groups } = useStudents();
  console.log(groups);
  console.log(typeof id);
  console.log(id);

  console.log(!id && groups.length > 0);
  if (!id && groups.length > 0) {
    return <Redirect to={`group/${groups[0]}`} />;
  }

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as='h2'>Group {id}</Title>
        <nav>
          {groups.map((group) => {
            return <Link to={`/group/${group}`}>{group}</Link>;
          })}
        </nav>
      </TitleWrapper>
      <StudentsWrapper>
        <UsersList users={students} />
      </StudentsWrapper>
    </Wrapper>
  );
};

export default Dashboard;
