import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { AdditionalProgressBar } from './additional-progress-bar';

export default {
  title: 'AdditionalProgressBar',
  component: AdditionalProgressBar,
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
} as ComponentMeta<typeof AdditionalProgressBar>;

const Template = (args) => <AdditionalProgressBar value={100} {...args} />;
export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { type: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };
