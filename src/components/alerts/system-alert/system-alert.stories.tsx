import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { SystemAlert } from './system-alert';

export default {
  title: 'SystemAlert',
  component: SystemAlert,
} as Meta;

const Action: FC = () => <SystemAlert.Action onClick={() => alert('Run Action')}>Action</SystemAlert.Action>;
const Template:Story = (args) => (
  <SystemAlert title="Title" type="INFO" action={<Action />} onClose={() => {}} {...args}>
    Content
  </SystemAlert>
);

export const Info = Template.bind({});
Info.args = { type: 'INFO', title: 'Title' };

export const Error = Template.bind({});
Error.args = { type: 'ERROR', title: 'Title' };

export const Warning = Template.bind({});
Warning.args = { type: 'WARNING', title: 'Title' };

export const Success = Template.bind({});
Success.args = { type: 'SUCCESS', title: 'Title' };
