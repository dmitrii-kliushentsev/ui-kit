import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Spinner } from './spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as Meta;

const Template: Story = (args) => <Spinner {...args} />;
export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
