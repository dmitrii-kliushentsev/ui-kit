import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Toggler } from './toggler';

export default {
  title: 'Toggler',
  component: Toggler,
} as ComponentMeta<typeof Toggler>;

const Template = (args) => {
  const { value, label, disabled } = args;
  const [val, setValue] = useState(value);
  return (
    <Toggler
      value={val}
      label={label}
      disabled={disabled}
      onChange={() => (val ? setValue(false) : setValue(true))}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: true,
  label: 'toggler',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: true,
  label: 'toggler',
  disabled: true,
};
