import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { SessionIndicator } from './session-indicator';

export default {
  title: 'SessionIndicator',
  component: SessionIndicator,
} as ComponentMeta<typeof SessionIndicator>;

const Template = (args) => <SessionIndicator {...args} />;
export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = { active: true };
