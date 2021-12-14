import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { Inputs } from '../../forms';

export function DefaultColumnFilter({
  column: {
    filterValue = '', setFilter = () => {}, Header = '',
  } = {},
}: any) {
  const [value, setValue] = useState(filterValue);

  const search = useCallback(debounce((v) => {
    setFilter(v?.trimEnd() || v);
  }, 300), [setFilter]);

  const onChangeHandler = (v: string) => {
    search(v);
    setValue(v);
  }

  return (
    <Inputs.Search
      value={value}
      onChange={e => {
        onChangeHandler(e.target.value);
      }}
      reset={() => setFilter('')}
      placeholder={`Search by ${Header.toLowerCase()}`}
    />
  );
}
