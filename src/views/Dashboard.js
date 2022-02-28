import React, { useEffect, useState } from 'react';
import UsersList from 'components/organims/UsersList/UsersList';
import { Link, Redirect, useParams } from 'react-router-dom';
import { Wrapper, StudentsWrapper, TitleWrapper } from './Dashborad.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
  const { id } = useParams();
  const [students, setStudents] = useState();
  const [groups, setGroups] = useState([]);

  const { getStudents, getGroups } = useStudents();

  useEffect(() => {
    (async () => {
      const data = await getGroups();
      setGroups(data);
    })();
  }, [getGroups]);

  useEffect(() => {
    (async () => {
      const data = await getStudents();
      setStudents(data);
    })();
  }, [id, getStudents]);

  if (!id) {
    return <Redirect to={`group/A`} />;
  }
  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
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
