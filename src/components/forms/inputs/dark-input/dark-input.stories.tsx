import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { DarkInput } from './dark-input';

export default {
  title: 'DarkInput',
  component: DarkInput,
} as ComponentMeta<typeof DarkInput>;

const Template = (args) => <DarkInput {...args} />;
export const Default = Template.bind({});
