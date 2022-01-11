import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import { DarkFormGroup } from './dark-form-group';
import { DarkInput } from '../inputs/dark-input';
import { DarkTextarea } from '../inputs/dark-textarea';

export default {
  title: 'DarkFormGroup',
  component: DarkFormGroup,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        {name: 'black', value: '#000'},
      ],
    },
  },
} as ComponentMeta<typeof DarkFormGroup>;

const TemplateWithInput: Story = (args) => (
  <DarkFormGroup label="" {...args}>
    <DarkInput />
  </DarkFormGroup>
);

const TemplateWithTextarea: Story = (args) => (
  <DarkFormGroup label="" {...args}>
    <DarkTextarea />
  </DarkFormGroup>
);

export const DefaultWithInput = TemplateWithInput.bind({});
DefaultWithInput.args = { label: 'default', optional: false };

export const OptionalWithInput = TemplateWithInput.bind({});
OptionalWithInput.args = { label: 'default', optional: true };

export const DefaultWithTextarea = TemplateWithTextarea.bind({});
DefaultWithTextarea.args = { label: 'default', optional: false };

export const OptionalWithTextarea = TemplateWithTextarea.bind({});
OptionalWithTextarea.args = { label: 'default', optional: true };
