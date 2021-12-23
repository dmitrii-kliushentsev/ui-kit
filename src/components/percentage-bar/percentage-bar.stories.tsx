import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { PercentageBar } from './percentage-bar';

export default {
  title: 'PercentageBar',
  component: PercentageBar,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof PercentageBar>;

const Template = (args) => <PercentageBar value={100} {...args} />;
export const Default = Template.bind({});
