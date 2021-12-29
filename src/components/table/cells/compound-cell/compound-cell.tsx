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

interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

// FIX this and Cells pls
export const CompoundCell = ({
  icon, children, ...rest
}: Props) => (
  <div tw="flex gap-2 py-2 text-monochrome-black" {...rest}>
    <div tw="h-5 flex items-center">{icon}</div>
    <div className="text-ellipsis group">
      {children}
    </div>
  </div>
);
