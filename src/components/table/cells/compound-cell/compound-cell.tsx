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
import tw, { styled } from 'twin.macro';

interface Props {
  cellName: string;
  cellAdditionalInfo?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  link?: React.ReactNode;
}

// FIX this and Cells pls
export const CompoundCell = ({
  icon, cellName, cellAdditionalInfo, children, link, ...rest
}: Props) => (
  <div tw="flex gap-2 py-2 text-monochrome-black" {...rest}>
    <div tw="h-5 flex items-center">{icon}</div>
    <div tw="text-ellipsis group">
      <div tw="flex gap-x-2 items-center">
        <Name
          data-test="compound-cell:name"
          title={cellName}
          bold={!!cellAdditionalInfo}
        >
          {children || cellName}
        </Name>
        {link && (
          <div tw="invisible h-4 text-monochrome-dark-tint cursor-pointer hover:text-blue-medium-tint group-hover:visible">
            {link}
          </div>
        )}
      </div>
      {cellAdditionalInfo && (
        <div
          tw="text-ellipsis mt-1 h-5 leading-20 text-12 font-regular text-monochrome-default"
          data-test="compound-cell:additional-info"
          title={cellAdditionalInfo}
        >
          {cellAdditionalInfo}
        </div>
      )}
    </div>
  </div>
);

const Name = styled.div`
  ${tw`text-ellipsis h-5 leading-20`}
  ${({ bold }: { bold: boolean }) => bold && tw`font-bold`}
`;
