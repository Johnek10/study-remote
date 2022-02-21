import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const useStudents = () => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => {
        setGroups(data.groups);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`/students/:${id || groups[0]}`)
      .then(({ data }) => {
        setStudents(data.students);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, [id]);

  const findStudents = async (searchPhr) => {
    try {
      const { data } = await axios.post('/students/search', {
        searchPhr,
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  /*   const students=[];
    axios
      .post('/students/search', {
        searchPhr: searchPhr,
      })
      .then(({data}) => {
        console.log(data);
        students.push(data)
    })
      .catch((error) => {
        console.log(error);
      });
      return students;
  }; */

  return {
    students,
    groups,
    findStudents,
  };
};
