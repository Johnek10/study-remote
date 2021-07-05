import React from 'react';
import { Wrapper } from './Average.styles';
const Average = (props) => (
  <Wrapper data={props.number}>{props.number}</Wrapper>
);
export default Average;
