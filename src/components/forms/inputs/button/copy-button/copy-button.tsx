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
import 'twin.macro';
import { Icons } from '../../../../icon';
import { useCopy } from '../../../../../hooks';
import { copyToClipboard } from '../../../../../utils';

interface Props {
  text: string,
}
export const CopyButton = ({ text }: Props) => {
  const { copied, setCopied } = useCopy({ delay: 3000 });
  return (
    <>
      { copied
        ? (
          <Icons.Success tw="text-blue-default" />
        )
        : (
          <Icons.Copy
            tw="invisible text-monochrome-dark-tint cursor-pointer hover:text-blue-medium-tint group-hover:visible"
            onClick={() => { copyToClipboard(text); setCopied(true); }}
          />
        )}
    </>
  );
};
