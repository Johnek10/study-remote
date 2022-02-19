import React, { useEffect } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organims/UsersList/UsersList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

const Dashboard = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(`/students/:${id}`)
      .then(({ data }) => {
        console.log(data);
        setStudents(data.students);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  return (
    <ViewWrapper>
      <UsersList users={students}/>
    </ViewWrapper>
  );
};

export default Dashboard;
