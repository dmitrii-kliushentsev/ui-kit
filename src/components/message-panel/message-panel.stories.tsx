import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { MessagePanel } from './message-panel';

export default {
  title: 'MessagePanel',
  component: MessagePanel,
  argTypes: { onClose: { action: 'close' } },
} as ComponentMeta<typeof MessagePanel>;

const Template = (args) => <MessagePanel {...args} />;

export const SUCCESS = Template.bind({});
SUCCESS.args = { message: { type: 'SUCCESS', text: 'Message' } };

export const ERROR = Template.bind({});
ERROR.args = { message: { type: 'ERROR', text: 'Message' } };

export const INFO = Template.bind({});
INFO.args = { message: { type: 'INFO', text: 'Message' } };

export const WARNING = Template.bind({});
WARNING.args = { message: { type: 'WARNING', text: 'Message' } };
