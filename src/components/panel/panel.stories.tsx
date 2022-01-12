import React, { FC, useState } from 'react';
import { Args, Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Panel } from './panel';

export default {
  title: 'Panel',
  component: Panel,
} as Meta;

const Template: Story = (args) => (
  <Panel {...args}>
    <Panel.Content>
      <div tw="px-6">
        <h2>Modal content</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
      </div>
    </Panel.Content>
  </Panel>
);

export const Default = Template.bind({});
Default.args = { isDisableFadeClick: false };


export const DisabledFadeClick = Template.bind({});
DisabledFadeClick.args = { isDisableFadeClick: true };
