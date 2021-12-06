import React from 'react';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
export const SearchBar = () => (
  <SearchBarWrapper>
    <StatusInfo>
      <p>Logged as:</p>
      <p>
        <strong>Student</strong>
      </p>
    </StatusInfo>
    <Input />
  </SearchBarWrapper>
);

export default SearchBar;
