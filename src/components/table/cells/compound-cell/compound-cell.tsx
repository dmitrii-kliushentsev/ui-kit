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

import { useCopy } from '../../../../hooks';
import { Icons } from '../../../icon';
import { copyToClipboard } from '../../../../utils';

interface Props {
  cellName: string;
  cellAdditionalInfo?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  link?: React.ReactNode;
}

export const CompoundCell = ({
  icon, cellName, cellAdditionalInfo, children, link,
}: Props) => {
  const { copied, setCopied } = useCopy({ delay: 3000 });
  return (
    <div tw="flex gap-2 py-2 text-monochrome-black">
      <div tw="h-5 flex items-center">{icon}</div>
      <div className="text-ellipsis group">
        <div tw="flex gap-x-2 items-center">
          <div
            className="text-ellipsis font-bold h-5 leading-20"
            data-test="compound-cell:name"
            title={cellName}
          >
            {children || cellName}
          </div>
          {copied
            ? (
              <Icons.Success tw="text-blue-default" />
            )
            : (
              <Icons.Copy
                tw="invisible text-monochrome-dark-tint cursor-pointer hover:text-blue-default group-hover:visible"
                onClick={() => { copyToClipboard(cellName); setCopied(true); }}
              />
            )}
          {link && <div tw="invisible text-monochrome-dark-tint cursor-pointer hover:text-blue-default group-hover:visible">{link}</div>}
        </div>
        {cellAdditionalInfo && (
          <div
            className="text-ellipsis mt-1 h-5 leading-20 text-12 font-regular text-monochrome-default"
            data-test="compound-cell:additional-info"
            title={cellAdditionalInfo}
          >
            {cellAdditionalInfo}
          </div>
        )}
      </div>
    </div>
  );
};
