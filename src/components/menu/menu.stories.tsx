import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Menu } from './menu';

const menuItems = [
  {
    label: 'Rename',
    icon: 'Edit',
    onClick: () => {},
  },
  {
    label: 'Settings',
    icon: 'Settings',
    onClick: () => {},
  },
  {
    label: 'Agents list',
    icon: 'Agents',
    onClick: () => {},
  },
  {
    label: 'Logs',
    icon: 'Logs',
    onClick: () => {},
  },
];

export default {
  title: 'Menu',
  component: Menu,
  decorators: [
    (StoryComponent) => (
      <div style={{ marginLeft: '300px' }}>
        <StoryComponent />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Menu items={menuItems} {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: '<Menu items={menuItems} />',
    },
  },
};

export const WithBorder = Template.bind({});
WithBorder.args = { bordered: true };
WithBorder.parameters = {
  docs: {
    source: {
      code: '<Menu bordered items={menuItems} />',
    },
  },
};
