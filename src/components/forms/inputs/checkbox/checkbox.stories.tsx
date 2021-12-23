import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Checkbox } from './checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    wrapperColor: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template = ({ wrapperColor }: {wrapperColor: string}) => (
  <div style={{ color: wrapperColor }}>
    <Checkbox />
  </div>
);

export const CheckboxWithColor = Template.bind({});
