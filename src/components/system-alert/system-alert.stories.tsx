import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { SystemAlert } from './system-alert';

export default {
  title: 'SystemAlert',
  component: SystemAlert,
} as Meta;

const Action: FC = () => <SystemAlert.Action onClick={() => alert('Run Action')}>Action</SystemAlert.Action>;
const Template:Story = (args) => (<SystemAlert title="Title" type="info" action={<Action />} {...args}>Content</SystemAlert>);

export const Info = Template.bind({});
Info.args = { type: 'info', title: 'Title' };

export const Error = Template.bind({});
Error.args = { type: 'error', title: 'Title' };

export const Warning = Template.bind({});
Warning.args = { type: 'warning', title: 'Title' };

export const Success = Template.bind({});
Success.args = { type: 'success', title: 'Title' };
