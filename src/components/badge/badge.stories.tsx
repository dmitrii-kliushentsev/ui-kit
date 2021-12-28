import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Badge } from './badge';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['gray', 'green', 'orange', 'red'],
    },
    bold: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story = (args) => <Badge {...args}>Badge</Badge>;
export const Default: Story = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: '<Badge>Badge</Badge>',
    },
  },
};

export const Gray: Story = Template.bind({});
Gray.args = { color: 'gray' };
Gray.parameters = {
  docs: {
    source: {
      code: '<Badge color="gray">Badge</Badge>',
    },
  },
};

export const Green: Story = Template.bind({});
Green.args = { color: 'green' };
Green.parameters = {
  docs: {
    source: {
      code: '<Badge color="green">Badge</Badge>',
    },
  },
};

export const Orange: Story = Template.bind({});
Orange.args = { color: 'orange' };
Orange.parameters = {
  docs: {
    source: {
      code: '<Badge color="orange">Badge</Badge>',
    },
  },
};

export const Red: Story = Template.bind({});
Red.args = { color: 'red' };
Red.parameters = {
  docs: {
    source: {
      code: '<Badge color="red">Badge</Badge>',
    },
  },
};
