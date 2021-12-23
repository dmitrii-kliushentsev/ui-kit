import React from 'react';
import { ComponentMeta } from '@storybook/react';
import 'twin.macro';

import { Popup } from './popup';

export default {
  title: 'Popup',
  component: Popup,
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['info', 'error'],
    },
  },
} as ComponentMeta<typeof Popup>;

const Template = (args) => (
  <Popup value={100} {...args}>
    <div tw="p-6">
      <h2>Error popup content</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
    </div>
  </Popup>
);
export const Default = Template.bind({});
