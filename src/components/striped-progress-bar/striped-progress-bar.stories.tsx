import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { StripedProgressBar } from './striped-progress-bar';

export default {
  title: 'StripedProgressBar',
  component: StripedProgressBar,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 300,
        step: 1,
      },
    },
    type: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
    },
  },
} as ComponentMeta<typeof StripedProgressBar>;

const Template = (args) => <StripedProgressBar value={100} {...args} />;

export const Primary = Template.bind({});
Primary.args = { type: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };
