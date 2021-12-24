import React from 'react';
import { ComponentMeta } from '@storybook/react';
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
    (Story) => (
      <div style={{ marginLeft: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Menu>;

const Template = (args) => <Menu items={menuItems} {...args} />;

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
