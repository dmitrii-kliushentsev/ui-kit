import React from 'react';
import { Args, Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Panel } from './panel';

export default {
  title: 'Modal',
  component: Panel,
} as Meta;

const Template: Story = (args: Args) => (
  <Panel onToggle={() => {}} isOpen {...args}>
    <div tw="px-6">
      <h2>Modal content</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
    </div>
  </Panel>
);
export const Default = Template.bind({});
