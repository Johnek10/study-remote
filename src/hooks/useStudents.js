import axios from 'axios';
import { useParams } from 'react-router-dom';

export const useStudents = () => {
  const { id } = useParams();

  const getGroups = () => {
    return axios
      .get('/groups')
      .then(({ data }) => {
        return data.groups;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getStudents = () => {
    if (!id) return;
    return axios
      .get(`/students/:${id || 'A'}`)
      .then(({ data }) => {
        return data.students;
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

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

  return {
    getStudents,
    getGroups,
    findStudents,
  };
};
