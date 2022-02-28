import React, { useState } from 'react';
import {
  SearchBarWrapper,
  SearchWrapper,
  StatusInfo,
  SearchResults,
  SearchResultsItem,
} from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
  const [matchingStudents, setmatchingStudents] = useState([]);

  const { findStudents } = useStudents();

  const getMatchingStudents = async ({ inputValue }) => {
    const { matchingStudents } = await findStudents(inputValue);
    setmatchingStudents(matchingStudents);
    console.log(matchingStudents);
  };

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>

      <SearchWrapper {...getComboboxProps()}>
        <Input name="Search" id="Search" {...getInputProps()} />

        <SearchResults
          isShow={isOpen && matchingStudents.length > 0}
          {...getMenuProps()}
        >
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultsItem
                highlighted={highlightedIndex === index}
                {...getItemProps({ item, index })}
                key={item.id}
              >
                {item.name}
              </SearchResultsItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
