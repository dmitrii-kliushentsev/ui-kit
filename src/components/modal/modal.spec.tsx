import React, { FC } from 'react';
import { fireEvent, getByText, render } from '@testing-library/react';
import { Modal } from './modal';
import { Button } from '../forms';
import { queryByDataTest } from '../../../test-utils';

const onToggle = jest.fn();
const portalRootElement = document.createElement('div');
portalRootElement.setAttribute('id', 'modal');

interface TemplateProps {
  onClose?: () => void;
  type?: 'error' | 'info';
  closeOnFadeClick?: boolean;
}

const Template: FC<TemplateProps> = ({
  type,
  onClose,
  closeOnFadeClick,
}) => (
  <Modal onClose={onClose}>
    <Modal.Content type={type} closeOnFadeClick={closeOnFadeClick}>
      <Modal.Header data-test="modal:header">Header</Modal.Header>
      <Modal.Body data-test="modal:body">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam praesentium laudantium delectus...</p>
      </Modal.Body>
      <Modal.Footer data-test="modal:footer">
        <Button primary size="large">
          Close
        </Button>
      </Modal.Footer>
    </Modal.Content>
  </Modal>
);

beforeEach(() => {
  onToggle.mockRestore();
});

describe('Modal', () => {
  it('should render modal with header, body and footer', () => {
    const { container } = render(<Template onClose={onToggle} />, {
      container: document.body.appendChild(portalRootElement),
    });
    expect(queryByDataTest(container, 'modal:header')).toBeInTheDocument();
    expect(queryByDataTest(container, 'modal:body')).toBeInTheDocument();
    expect(queryByDataTest(container, 'modal:footer')).toBeInTheDocument();
  });
  it('should close modal and run onClose click close button', () => {
    const { container } = render(<Template onClose={onToggle} />, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent(
      queryByDataTest(container, 'modal:close-button') || document.body,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(queryByDataTest(container, 'modal:header')).toBeNull();
    expect(queryByDataTest(container, 'modal:body')).toBeNull();
    expect(queryByDataTest(container, 'modal:footer')).toBeNull();
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
  it('should close modal and run onClose click fade', () => {
    const { container } = render(<Template onClose={onToggle} />, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent(
      queryByDataTest(container, 'modal:fade') || document.body,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(queryByDataTest(container, 'modal:header')).toBeNull();
    expect(queryByDataTest(container, 'modal:body')).toBeNull();
    expect(queryByDataTest(container, 'modal:footer')).toBeNull();
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
