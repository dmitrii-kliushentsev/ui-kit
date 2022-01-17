import React, { FC } from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
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
  children, type, onClose, closeOnFadeClick, ...rest
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
});
