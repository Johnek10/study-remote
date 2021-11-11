import React, {useState, useContext}from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from './Root';

const AddUser = () => {
  const context=useContext(UsersContext);
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

  const handleSubmitUser=(e)=>{
    e.preventDefault();
    context.handleAddUser(formsValue);
  }

  return (
        <ViewWrapper as="form" onSubmit={handleSubmitUser}>
          <Title>Add new student</Title>
          <FormField
            label="Name"
            id="name"
            name="name"
            value={formsValue.name}
            onChange={handleName}
          />
          <FormField
            label="Attendance"
            id="attendance"
            name="attendance"
            value={formsValue.attendance}
            onChange={handleName}
          />
          <FormField
            label="Average"
            id="average"
            name="average"
            value={formsValue.average}
            onChange={handleName}
          />
          <Button type="submit">Add</Button>
        </ViewWrapper>
      
  );
}
export default AddUser;
