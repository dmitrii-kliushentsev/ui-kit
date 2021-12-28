import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import 'twin.macro';

import { Input } from './input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: Story = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = { disabled: false };
Default.parameters = {
  docs: {
    source: {
      code: '<Input />',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.parameters = {
  docs: {
    source: {
      code: '<Input disabled/>',
    },
  },
};
