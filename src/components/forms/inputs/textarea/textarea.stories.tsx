import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Textarea } from './textarea';

export default {
  title: 'Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
