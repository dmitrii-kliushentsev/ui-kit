import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Status } from './status';

export default {
  title: 'Status',
  component: Status,
} as Meta;

const Template: Story = (args) => <Status {...args}>Status</Status>;

export const Default = Template.bind({});
