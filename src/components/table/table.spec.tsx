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
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { Table } from './table';
import { TableActionsProvider } from './table-actions';
import { getAllByDataTest, getByDataTest, queryByDataTest } from '../../../test-utils';

const createData = (length: number) => Array.from({ length }, (_, i) => ({
  buildVersion: `0.${i}.0`,
  detectedAt: 1625224274896,
  summary: null,
}));

const props = {
  isDefaulToggleSortBy: true,
  columns: [
    {
      Header: 'Name',
      accessor: 'buildVersion',
      Cell: ({ value: buildVersion }: any) => (
        <div tw="grid gap-x-2 h-12 items-center font-bold text-14">
          <div tw="link text-ellipsis">{buildVersion}</div>
        </div>
      ),
      textAlign: 'left',
      width: '30%',
    },
    {
      Header: 'Added',
      accessor: 'detectedAt',
      textAlign: 'left',
      width: '20%',
    },
    {
      Header: 'Total methods',
      accessor: 'summary.total',
      width: '10%',
    },
    {
      Header: 'New',
      accessor: 'summary.new',
      width: '10%',
    },
    {
      Header: 'Modified',
      accessor: 'summary.modified',
      width: '10%',
    },
    {
      Header: 'Unaffected',
      accessor: 'summary.unaffected',
      width: '10%',
    },
    {
      Header: 'Deleted',
      accessor: 'summary.deleted',
      width: '10%',
    },
  ],
  data: createData(26),
};

describe('Table', () => {
  it('should render table with search if props "withSearch" is equal true', () => {
    render(<TableActionsProvider><Table {...props} withSearch placeholder="table placeholder" /></TableActionsProvider>);
    expect(screen.getByPlaceholderText('table placeholder')).toBeInTheDocument();
  });

  it('should render table without search if props "withSearch" is equal false', () => {
    render(<TableActionsProvider><Table {...props} withSearch={false} placeholder="table placeholder" /></TableActionsProvider>);
    expect(screen.queryByPlaceholderText('table placeholder')).toBeNull();
  });

  it('should render table with stub if it passed via props', () => {
    const { rerender } = render(<TableActionsProvider><Table {...props} stub={<div>stub</div>} /></TableActionsProvider>);
    expect(screen.getByText('stub')).toBeInTheDocument();

    rerender(<TableActionsProvider><Table {...props} /></TableActionsProvider>);
    expect(screen.queryByText('stub')).toBeNull();
  });

  it('should not render pagination if rows less than 25', () => {
    const { container } = render(<TableActionsProvider><Table {...props} data={createData(24)} /></TableActionsProvider>);
    expect(queryByDataTest(container, 'table:displaying-results-count')).toBeNull();
    expect(queryByDataTest(container, 'table:rows:count')).toBeNull();
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-left')).toBeNull();
    expect(queryByDataTest(container, 'table-pagination:pagination-arrow-right')).toBeNull();
  });

  it('should render 25 rows by default data.length more than 25', () => {
    render(<TableActionsProvider><Table {...props} data={createData(26)} /></TableActionsProvider>);
    expect(screen.getAllByText('1625224274896').length).toBe(25);
  });

  it('should render 50 rows if select it in select rows dropdown', () => {
    const { container } = render(<TableActionsProvider><Table {...props} data={createData(51)} /></TableActionsProvider>);
    fireEvent.click(getByDataTest(container, 'table-pagination:select-rows-dropdown'));
    fireEvent.click(getAllByDataTest(container, 'table-pagination:select-rows-dropdown:item')[1]);
    expect(screen.getAllByText('1625224274896').length).toBe(50);
  });

  it('should throw error when data is not an object and display stub', () => {
    // @ts-ignore
    render(<TableActionsProvider><Table {...props} data="" /></TableActionsProvider>);
    expect(screen.getByText('Table load failed')).toBeInTheDocument();
  });

  // it('should sort table after click to table cell', () => {
  //   const { container } = render(<TableActionsProvider><Table {...props} isDefaulToggleSortBy /></TableActionsProvider>);
  //   const headerCell = getByDataTest(container, 'table-th-buildVersion');
  //   expect(screen.getAllByText(/0./)[0].textContent).toBe('0.0.0');
  //   fireEvent.click(getByDataTest(headerCell, 'table-th-sort-arrow'));
  //   expect(screen.getAllByText(/0./)[0].textContent).toBe('0.24.0');
  // });
});
