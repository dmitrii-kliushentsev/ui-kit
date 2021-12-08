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

import { percentFormatter } from '../../../../utils';
import { ClickableCell } from '../clickable-cell';
import { PercentageBar } from '../../../percentage-bar';

interface Props {
  value: number;
}

export const CoverageProgressCell = ({ value = 0 }: Props) => (
  <div tw="flex items-center gap-x-2 leading-64">
    <PercentageBar percentage={percentFormatter(value)} />
    <ClickableCell disabled>
      {percentFormatter(value)}
    </ClickableCell>
  </div>
);
