import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import 'twin.macro';

import { Tab } from './tab';

export default {
  title: 'Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: Story = (args) => <Tab {...args}>Tab</Tab>;
export const Default = Template.bind({});
Default.args = { active: false };
Default.parameters = {
  docs: {
    source: {
      code: '<Tab>Tab</Tab>',
    },
  },
};

export const Active = Template.bind({});
Active.args = { active: true };
Active.parameters = {
  docs: {
    source: {
      code: '<Tab active>Tab</Tab>',
    },
  },
};
