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
import { Icons } from '../../icon';
import { TableElements } from '../table-elements';

export const DefaultTableHeaderColumn = ({ column }: any) => (
  <TableElements.TH
    key={`table-th-${column.id}`}
    style={{ textAlign: column.textAlign || 'right', width: column.filterable ? '100%' : column.width }}
    data-test={`table-th-${column.id}`}
  >
    <TableElements.Label key={`table-label-${column.id}`}>
      {!column.notSortable ? ( // TODO remove this operator and compose header and sort arrow in one component
        <>
          <TableElements.SortArrow
            active={column.isSorted}
            {...column.getHeaderProps(column.getSortByToggleProps())}
          >
            <Icons.SortingArrow rotate={column.isSortedDesc ? 0 : 180} />
          </TableElements.SortArrow>
          <TableElements.HeaderText position={column.textAlign}>
            <div {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}</div>
            {column.filterable ? column.render('Filter') : null}
          </TableElements.HeaderText>
        </>
      ) : (
        <TableElements.HeaderText position={column.textAlign}>
          {column.render('Header')}
          {column.filterable ? column.render('Filter') : null}
        </TableElements.HeaderText>
      )}
    </TableElements.Label>
  </TableElements.TH>
);
