import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Popup, PanelProps } from './popup';
import { Button } from '../forms';

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
    closeOnFadeClick: {
      control: {
        type: 'boolean',
        default: true,
      },
    },
  },
} as Meta;

const Template = ({ closeOnFadeClick, type }: PanelProps) => (
  <div tw="justify-center w-[368px] h-[368px]">
    <Popup>
      {({ setIsOpen, isOpen }) => (
        <>
          <Button primary size="large" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'}
          </Button>
          <Popup.Panel type={type} closeOnFadeClick={closeOnFadeClick}>
            <Popup.Header>Header</Popup.Header>
            <div tw="px-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
            </div>
            <Popup.Footer>
              <Button primary size="large" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </Popup.Footer>
          </Popup.Panel>
        </>
      )}
    </Popup>
  </div>
);
export const Default = Template.bind({});
