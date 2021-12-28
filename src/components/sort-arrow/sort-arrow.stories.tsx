import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { SortArrow } from './sort-arrow';

export default {
  title: 'SortArrow',
  component: SortArrow,
} as Meta;

const Template: Story = (args) => <SortArrow order={null} {...args} />;
export const Default = Template.bind({});

export const DESC = Template.bind({});
DESC.args = { order: 'DESC' };

export const ASC = Template.bind({});
ASC.args = { order: 'ASC' };
