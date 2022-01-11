import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Select } from './select';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default = () => <Select value="JS" options={['JS', 'HTML', 'CSS']} placeholder="Choose your option" />;
