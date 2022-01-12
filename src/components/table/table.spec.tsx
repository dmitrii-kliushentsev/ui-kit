/*
 * Copyright 2020 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { Table } from './table';
import { TableActionsProvider } from './table-actions';
import { getAllByDataTest, getByDataTest, queryByDataTest } from '../../../test-utils';
import { Cells } from './cells';
import { Icons } from '../icon/index';
import { Skeleton } from '../skeleton';
import { Stub } from '../stub';

const createData = (length: number) => Array.from({ length }, (_, i) => ({
  buildVersion: `0.${i}.0`,
  detectedAt: 1625224274896,
  summary: null,
}));

const props = {
  isLoading: false,
  data: Array.from({ length: 60 }, (_, i) => ({
    id: `[engine:junit-jupiter]/[class:api.standalone.StandaloneApiTest]/[method:junit5IgnoredTest()]:AUTO-${i}`,
    type: 'AUTO',
    name: `[engine:junit-jupiter]/[class:api.standalone.StandaloneApiTest]/[method:junit5IgnoredTest()]-${i}`,
    coverage: ++i,
  })),
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
      textAlign: 'left',
      filterable: true,
      isCustomCell: true,
      width: '100%',
      Cell: ({ value = '', state }: any) => (value ? (
        <Cells.Compound
          cellName={value}
          cellAdditionalInfo="foo-bar"
          icon={<Icons.Function />}
        >
          <Cells.Highlight text={value} searchWords={state.filters.map((filter: {value: string}) => filter.value)} />
        </Cells.Compound>
      ) : <Skeleton withIcon withSubLine />),
    },
    {
      Header: 'Type',
      accessor: 'type',
      textAlign: 'left',
      width: '100%',
      Cell: ({ value = '' }: any) => (value ? (
        <Cells.Compound
          cellName={value}
          icon={<Icons.Class />}
        >
          {value}
        </Cells.Compound>
      ) : <Skeleton withIcon withSubLine />),
    },
    {
      Header: 'Coverage, %',
      accessor: 'coverage',
      textAlign: 'left',
      width: '100%',
      Cell: ({ value = '' }: any) => (value
        ? <Cells.Coverage value={value} />
        : <Skeleton />),
    },
  ],
  withSearch: true,
  isDefaulToggleSortBy: true,
  placeholder: 'Search packages by name',
  renderHeader: ({ currentCount, totalCount }: { currentCount: number, totalCount: number }) => (
    <div tw="flex justify-between text-monochrome-default text-14 leading-24 pb-3">
      <div tw="uppercase font-bold">{`Current (${currentCount})`}</div>
      <div>{`Displaying ${currentCount} of ${totalCount}`}</div>
    </div>
  ),
};

describe('Table', () => {
  it('should render table with stub if no rows', () => {
    const { rerender } = render(<BrowserRouter><TableActionsProvider><Table {...props} stub={<div>stub</div>} data={[]} /></TableActionsProvider></BrowserRouter>);
    expect(screen.getByText('stub')).toBeInTheDocument();
  });

  it('should not render pagination if rows less than 25', () => {
    const { container } = render(<BrowserRouter><TableActionsProvider><Table {...props} data={createData(24)} /></TableActionsProvider></BrowserRouter>);
    expect(queryByDataTest(container, 'table:displaying-results-count')).toBeNull();
    expect(queryByDataTest(container, 'table:rows:count')).toBeNull();
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-left')).toBeNull();
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-right')).toBeNull();
  });

  it('should render 25 rows by default data.length more than 25', () => {
    const { container } = render(<BrowserRouter><TableActionsProvider><Table {...props} data={createData(26)} /></TableActionsProvider></BrowserRouter>);
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-left')).toBeInTheDocument();
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-right')).toBeInTheDocument();
  });

  it('should not render pagination if selected display 50 rows and rendered less that 50', () => {
    const { container } = render(<BrowserRouter><TableActionsProvider><Table {...props} data={createData(50)} /></TableActionsProvider></BrowserRouter>);
    fireEvent.click(getByDataTest(container, 'table-pagination:select-rows-dropdown'));
    fireEvent.click(getAllByDataTest(container, 'table-pagination:select-rows-dropdown:item')[1]);
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-left')).toBeNull();
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-right')).toBeNull();
  });

  it('should throw error when data is not an object and display stub', () => {
    // @ts-ignore
    render(<BrowserRouter><TableActionsProvider><Table {...props} data="" /></TableActionsProvider></BrowserRouter>);
    expect(screen.getByText('Table load failed')).toBeInTheDocument();
  });
});
