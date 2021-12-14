import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { Inputs } from '../../forms';

export function DefaultColumnFilter({
  column: {
    filterValue = '', setFilter = () => {}, Header = '',
  } = {},
}: any) {
  const [valueInput, setValueInput] = useState(filterValue);

  const search = useCallback(debounce((value) => {
    setFilter(value);
  }, 300), [setFilter]);

  const onChangeHandler = (value: string) => {
    search(value);
    setValueInput(value);
  }

  return (
    <Inputs.Search
      value={valueInput}
      onChange={e => {
        onChangeHandler(e.target.value);
      }}
      reset={() => setFilter('')}
      placeholder={`Search by ${Header.toLowerCase()}`}
    />
  );
}
