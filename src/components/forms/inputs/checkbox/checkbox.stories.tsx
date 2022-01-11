import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Checkbox } from './checkbox';
import CheckboxDocs from './checkbox-docs.mdx';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    wrapperColor: {
      control: 'color',
    },
  },
  parameters: {
    docs: {
      page: CheckboxDocs,
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template = ({ wrapperColor }: {wrapperColor: string}) => (
  <div style={{ color: wrapperColor }}>
    <Checkbox />
  </div>
);

export const CheckboxWithColor = Template.bind({});
