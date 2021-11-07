import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from '../UsersList/UserList.styles';
import { FormField } from 'components/molecules/FormField/FormField';

const Form=({handleAddUser, handleName, formsValue})=>{
    console.log(formsValue)
    return(
        <Wrapper as="form" onSubmit={handleAddUser}>
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
      </Wrapper>
    )
}

export default Form;