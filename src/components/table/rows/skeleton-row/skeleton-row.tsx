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
import 'twin.macro';

import { TableElements } from '../../table-elements';

export const SkeletonRow = ({ rawRow, prepareRow, delay }: any) => {
  prepareRow(rawRow);

  return (
    <TableElements.FadeInTR delay={delay}>
      {rawRow.cells.map((cell: any) => (
        <td tw="px-4" {...cell.getCellProps()} style={{ textAlign: cell.column.textAlign || 'right' }} key={cell.column.id}>
          {cell.render('Cell')}
        </td>
      ))}
    </TableElements.FadeInTR>
  );
};
