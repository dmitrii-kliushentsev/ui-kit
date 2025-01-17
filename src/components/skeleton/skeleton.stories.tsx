import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Skeleton } from './skeleton';

export default {
  title: 'Skeleton',
  component: Skeleton,
} as Meta;

const Template: Story = (args) => <Skeleton {...args} />;
export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = { withIcon: true };

export const WithSubLine = Template.bind({});
WithSubLine.args = { withSubLine: true };
