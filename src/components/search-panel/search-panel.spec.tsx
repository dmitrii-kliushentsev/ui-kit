import React from 'react';
import {
  render, fireEvent, screen, logRoles,
} from '@testing-library/react';
import { SearchPanel } from './search-panel';

const PLACEHOLDER = 'PLACEHOLDER';
const SEARCH_RESULT = 8;
const SEARCH_QUERY = 'SEARCH_QUERY';
const VALUE_WAS_SET = 'VALUE  VALUE';
const EXPECTED_VALUE = 'VALUE VALUE';
const onSearch = jest.fn();

describe('SearchPanel', () => {
  it('should set value with on space instead of two', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchQuery={SEARCH_QUERY}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
      />,
    );
    const input = screen.getByPlaceholderText(PLACEHOLDER);
    fireEvent.change(input, { target: { value: VALUE_WAS_SET } });
    expect(screen.getByDisplayValue(EXPECTED_VALUE)).toBeInTheDocument();
  });

  it('should hide search result if search query is empty', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery=""
      />,
    );
    expect(screen.queryByText('result')).toBe(null);
  });

  it('should show search result if search query is not empty', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    expect(screen.getByText(`${SEARCH_RESULT} results`)).toBeInTheDocument();
  });

  it('should show "1 result" if result is only one ', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={1}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    expect(screen.getByText('1 result')).toBeInTheDocument();
  });

  it('should show "8 results" if results is 8', () => {
    render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    expect(screen.getByText(`${SEARCH_RESULT} results`)).toBeInTheDocument();
  });

  it('should reset value after the click to X', () => {
    const { debug } = render(
      <SearchPanel
        onSearch={onSearch}
        searchResult={SEARCH_RESULT}
        placeholder={PLACEHOLDER}
        searchQuery={SEARCH_QUERY}
      />,
    );
    debug();
  });
});
