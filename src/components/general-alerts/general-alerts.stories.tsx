import React from 'react';
import { ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof GeneralAlerts>;

const Template = (args) => <GeneralAlerts {...args}>Alert</GeneralAlerts>;

export const SUCCESS = Template.bind({});
SUCCESS.args = { type: 'SUCCESS' };

export const ERROR = Template.bind({});
ERROR.args = { type: 'ERROR' };

export const INFO = Template.bind({});
INFO.args = { type: 'INFO' };

export const WARNING = Template.bind({});
WARNING.args = { type: 'WARNING' };
