import React, { FC, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Panel } from './panel';
import { Button } from '../../drill4j-ui-kit';

export default {
  title: 'Panel',
  component: Panel,
} as Meta;

const Template: Story = (args) => (
  <Panel>
    {({ isOpen, setIsOpen }) => (
      <>
        <Button primary size="large" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'}
        </Button>
        <Panel.Content {...args}>
          <Panel.Header>
            <h2>Modal header</h2>
          </Panel.Header>
          <Panel.Body>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
          </Panel.Body>
          <Panel.Footer>
            Modal Footer
          </Panel.Footer>
        </Panel.Content>
      </>
    )}
  </Panel>
);

export const Default = Template.bind({});
Default.args = { isDisableFadeClick: false };


export const DisabledFadeClick = Template.bind({});
DisabledFadeClick.args = { isDisableFadeClick: true };
