import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Label } from './label';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args}>Label</Label>;

export const Default = Template.bind({});

export const Chips = Template.bind({});
Chips.args = { deleteHandler: () => {} };
