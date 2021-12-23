import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Spinner } from './spinner';

export default {
  title: 'Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template = (args) => <Spinner {...args} />;
export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
