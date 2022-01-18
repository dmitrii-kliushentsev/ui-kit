import React, { FC } from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { SystemAlert } from './system-alert';

export default {
  title: 'SystemAlert',
  component: SystemAlert,
} as Meta;

const Action: FC = () => <SystemAlert.Action onClick={() => alert('Run Action')}>Action</SystemAlert.Action>;
const Template:Story = (args) => (<SystemAlert title="Title" type="info" action={<Action />} {...args}>Title</SystemAlert>);

export const Info = Template.bind({});
Info.args = { type: 'info', title: 'Title' };
