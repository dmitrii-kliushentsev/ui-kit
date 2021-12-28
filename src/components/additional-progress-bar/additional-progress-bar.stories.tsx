import React from 'react';
import { Meta, Story } from '@storybook/react';
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
} as Meta;

const TemplateAdditionalProgressBar: Story = (args) => <AdditionalProgressBar value="100" {...args} />;

export const DefaultAdditionalProgressBar: Story = TemplateAdditionalProgressBar.bind({});

export const PrimaryAdditionalProgressBar: Story = TemplateAdditionalProgressBar.bind({});
PrimaryAdditionalProgressBar.args = { type: 'primary' };

export const SecondaryAdditionalProgressBar: Story = TemplateAdditionalProgressBar.bind({});
SecondaryAdditionalProgressBar.args = { type: 'secondary' };
