import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Modal } from './modal';
import { getByDataTest } from '../../../test-utils';

const onToggle = jest.fn();
const children = <div>children</div>;
const portalRootElement = document.createElement('div');
portalRootElement.setAttribute('id', 'modal');
beforeEach(() => {
  jest.useFakeTimers();
  jest.runOnlyPendingTimers();
  onToggle.mockRestore();
});

describe('Modal', () => {
  it('should render modal with children when has "isOpen=true" props', () => {
    render(<Modal onToggle={onToggle} isOpen>{children}</Modal>, {
      container: document.body.appendChild(portalRootElement),
    });
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should not render modal with children when has "isOpen=false" props', () => {
    render(<Modal onToggle={onToggle} isOpen={false}>{children}</Modal>, {
      container: document.body.appendChild(portalRootElement),
    });
    expect(screen.queryByText('children')).toBe(null);
  });

  it('should call "onToggle" function with false value as a first argument', () => {
    const { container } = render(<Modal onToggle={onToggle} isOpen>{children}</Modal>, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent.click(getByDataTest(container, 'modal:close-button'));
    expect(onToggle).toBeCalledTimes(1);
    expect(onToggle.mock.calls[0][0]).toBe(false);
  });

  it('should call "onToggle" function after the close button is clicked with false value as first argument', () => {
    const { container } = render(<Modal onToggle={onToggle} isOpen>{children}</Modal>, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent.click(getByDataTest(container, 'modal:close-button'));
    expect(onToggle).toBeCalledTimes(1);
    expect(onToggle.mock.calls[0][0]).toBe(false);
  });

  it('should call "onToggle" function after the fade block is clicked with false value as first argument if "isDisableFadeClick" is equal false', () => {
    const { container } = render(<Modal onToggle={onToggle} isOpen isDisableFadeClick={false}>{children}</Modal>, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent.click(getByDataTest(container, 'modal:fade'));
    expect(onToggle).toBeCalledTimes(1);
    expect(onToggle.mock.calls[0][0]).toBe(false);
  });

  it('should not call "onToggle" function after the fade block is clicked if "isDisableFadeClick" is equal true', () => {
    const { container } = render(<Modal onToggle={onToggle} isOpen isDisableFadeClick>{children}</Modal>, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent.click(getByDataTest(container, 'modal:fade'));
    expect(onToggle).toBeCalledTimes(0);
  });
});
