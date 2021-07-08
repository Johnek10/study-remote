import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/deleteIcon.svg';
import { StyledButton } from './Button.styles.js';

/*
const hello = () => {
  alert('Dupa po prostu');
};
*/

const Button = (props) => (
  <StyledButton {...props}>
    {console.log(props)}
    <DeleteIcon />
  </StyledButton>
);

export default Button;
