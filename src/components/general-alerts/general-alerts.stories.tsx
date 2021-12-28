import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { GeneralAlerts } from './general-alerts';

export default {
  title: 'GeneralAlerts',
  component: GeneralAlerts,
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['SUCCESS', 'ERROR', 'INFO', 'WARNING'],
    },
  },
} as Meta;

const Template: Story = (args) => <GeneralAlerts type="SUCCESS" {...args}>Alert</GeneralAlerts>;

export const SUCCESS = Template.bind({});
SUCCESS.args = { type: 'SUCCESS' };

export const ERROR = Template.bind({});
ERROR.args = { type: 'ERROR' };

export const INFO = Template.bind({});
INFO.args = { type: 'INFO' };

export const WARNING = Template.bind({});
WARNING.args = { type: 'WARNING' };
