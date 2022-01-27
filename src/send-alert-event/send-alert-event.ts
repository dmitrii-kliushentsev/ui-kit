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
import { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AlertType } from '../types/alert';

export interface IAlert {
  id?: string;
  type: AlertType;
  title: string;
  text?: string;
  action?: ReactElement;
  onClose?: () => void;
}

export const sendAlertEvent = (alert: IAlert) => {
  const event = new CustomEvent<IAlert>('system-alert', {
    detail: {
      id: uuidv4(),
      title: alert.title,
      text: alert.text,
      type: alert.type,
      action: alert.action,
    },
  });
  document.dispatchEvent(event);
};
