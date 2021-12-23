import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Status } from './status';

export default {
  title: 'Status',
  component: Status,
} as ComponentMeta<typeof Status>;

const Template = (args) => <Status {...args}>Status</Status>;

export const Default = Template.bind({});
