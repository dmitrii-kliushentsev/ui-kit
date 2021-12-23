import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { MainProgressBar } from './main-progress-bar';

export default {
  title: 'MainProgressBar',
  component: MainProgressBar,
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
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
} as ComponentMeta<typeof MainProgressBar>;

const Template = (args) => <MainProgressBar value={100} {...args} />;
export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = { type: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { type: 'secondary' };
