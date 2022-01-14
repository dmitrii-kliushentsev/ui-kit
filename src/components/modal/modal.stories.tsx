import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Modal, PanelProps } from './modal';
import { Button } from '../forms';

export default {
  title: 'Modal',
  component: Modal,
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
    <Modal>
      {({ setIsOpen, isOpen }) => (
        <>
          <Button primary size="large" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Open'}
          </Button>
          <Modal.Panel type={type} closeOnFadeClick={closeOnFadeClick}>
            <Modal.Header>Header</Modal.Header>
            <div tw="px-6">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, iure magni quia excepturi aliquid quas nostrum?</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi corrupti dolorem incidunt quisquam.</p>
            </div>
            <Modal.Footer>
              <Button primary size="large" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Panel>
        </>
      )}
    </Modal>
  </div>
);
export const Default = Template.bind({});
