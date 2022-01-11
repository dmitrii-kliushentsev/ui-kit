import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { SessionIndicator } from './session-indicator';

export default {
  title: 'SessionIndicator',
  component: SessionIndicator,
} as Meta;

const Template: Story = (args) => <SessionIndicator {...args} />;
export const Default = Template.bind({});

export const Active = Template.bind({});
Active.args = { active: true };
