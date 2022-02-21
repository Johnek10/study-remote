import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const useStudents=(params) => {
    const {id}=useParams();
    const [students, setStudents]=useState([]);
    const [groups, setGroups]=useState([]);

    useEffect(() => {
       axios.get('/groups').then(({ data }) => {
         console.log(data);
         setGroups(data.groups);
       })
       .catch(error=>{console.log(error);})
     }, []);
    
     useEffect(() => {
       axios
         .get(`/students/:${id || groups[0]}`)
         .then(({ data }) => {
           console.log(data);
           setStudents(data.students);
         })
         .catch((error) => {
           console.log(`Error: ${error}`);
         });
     }, [id]);

     return {
         students,
         groups
     }
}

