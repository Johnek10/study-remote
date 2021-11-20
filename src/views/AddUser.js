import React, {useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProviders';

const AddUser = () => {
  const actionTypes = {
    inputChange: 'INPUT CHANGE',
    clearValues: 'CLEAR FORMVALUES',
    consentToggle: 'CONSENT TOGGLE',
    error: 'ERROR',
  };
  const startFormState = {
    name: '',
    attendance: '',
    average: '',
    consent: false,
    error: '',
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.inputChange:
        return {
          ...state,
          [action.field]: action.value,
        };
      case actionTypes.clearValues:
        return startFormState;
      case actionTypes.consentToggle:
        return {
          ...state,
          consent: !state.consent,
        };
      case actionTypes.error:
        return {
          ...state,
          error: action.errorValue,
        };
      default:
        return state;
    }
  };

  const context = useContext(UsersContext);
  const [formsValue, dispatch] = useReducer(reducer, startFormState);
  const handleName = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formsValue.consent) {
      context.handleAddUser(formsValue);
      dispatch({ type: actionTypes.clearValues });
    } else {
      dispatch({ type: actionTypes.error, errorValue: 'Nie wyraziles zgody' });
    }
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
      <FormField
        label="Consent"
        id="consent"
        name="constent"
        type="checkbox"
        onChange={() => {
          dispatch({ type: 'CONSENT TOGGLE' });
        }}
      ></FormField>
      <p>{formsValue.consent ? 'OK' : formsValue.error}</p>
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};
export default AddUser;
