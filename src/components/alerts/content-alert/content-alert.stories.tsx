import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { ContentAlert } from './content-alert';

export default {
  title: 'ContentAlert',
  component: ContentAlert,
} as Meta;

const Template:Story = (args) => (<ContentAlert message="Message" type="info" {...args} />);

export const Info = Template.bind({});
Info.args = { type: 'info', message: 'Message' };

export const Error = Template.bind({});
Error.args = { type: 'error', message: 'Message' };

export const Warning = Template.bind({});
Warning.args = { type: 'warning', message: 'Message' };

export const Success = Template.bind({});
Success.args = { type: 'success', message: 'Message' };
