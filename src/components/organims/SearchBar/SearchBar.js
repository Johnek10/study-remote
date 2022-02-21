import React, { useState } from 'react';
import {
  SearchBarWrapper,
  SearchWrapper,
  StatusInfo,
  SearchResults,
} from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import { useEffect } from 'react/cjs/react.development';

export const SearchBar = () => {
  const [matchingStudents, setmatchingStudents] = useState([]);
  const [searchPhr, setsearchPhr] = useState('');

  const { findStudents } = useStudents();

  const getMatchingStudents = async () => {
    const { matchingStudents } = await findStudents(searchPhr);
    setmatchingStudents(matchingStudents);
    console.log(matchingStudents);
  };

  const listenInput = (e) => {
    setsearchPhr(e.target.value);
  };

  useEffect(() => {
    getMatchingStudents(searchPhr);
    console.log(matchingStudents);
  }, [searchPhr]);

  return (
    <SearchBarWrapper>
      {console.log(`Search: ${searchPhr}`)}
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <SearchWrapper>
        <Input
          name="Search"
          id="Search"
          onChange={listenInput}
          value={searchPhr}
        />
        <SearchResults>
          {matchingStudents.map((params) => (
            <li>{params.name}</li>
          ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
