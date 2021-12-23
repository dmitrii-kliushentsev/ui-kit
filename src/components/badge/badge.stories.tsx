import React from 'react';
import { ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof Badge>;

const Template = (args) => <Badge children="Badge" {...args} />;
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: '<Badge>Badge</Badge>',
    },
  },
};

export const Gray = Template.bind({});
Gray.args = { color: 'gray' };
Gray.parameters = {
  docs: {
    source: {
      code: '<Badge color="gray">Badge</Badge>',
    },
  },
};

export const Green = Template.bind({});
Green.args = { color: 'green' };
Green.parameters = {
  docs: {
    source: {
      code: '<Badge color="green">Badge</Badge>',
    },
  },
};

export const Orange = Template.bind({});
Orange.args = { color: 'orange' };
Orange.parameters = {
  docs: {
    source: {
      code: '<Badge color="orange">Badge</Badge>',
    },
  },
};

export const Red = Template.bind({});
Red.args = { color: 'red' };
Red.parameters = {
  docs: {
    source: {
      code: '<Badge color="red">Badge</Badge>',
    },
  },
};
