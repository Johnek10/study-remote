import React, { useState, useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProviders';

const AddUser = () => {
  const startFormState={
    name: '',
    attendance: '',
    average: '',
  }
  const reducer = (state, action) => {
    switch(action.type){
      case 'INPUT CHANGE':
        return {
          ...state,
          [action.field]: action.value
        }
      case 'CLEAR FORMVALUES':
        return startFormState;
      default:
        return state;
    }
  };

  const context = useContext(UsersContext);
  const [formsValue, dispatch] = useReducer(reducer, startFormState);
  const handleName = (e) => {
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value
    })
    };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    context.handleAddUser(formsValue);
    dispatch({type : 'CLEAR FORMVALUES'});
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add User</Title>
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
};
export default AddUser;
