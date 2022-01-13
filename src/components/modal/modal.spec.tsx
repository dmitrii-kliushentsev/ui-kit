import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Popup } from './popup';
import { getByDataTest } from '../../../test-utils';

const onToggle = jest.fn();
const HEADER = <div>HEADER</div>;
const CHILDREN = <div>CHILDREN</div>;
const portalRootElement = document.createElement('div');
portalRootElement.setAttribute('id', 'modal');

beforeEach(() => {
  onToggle.mockRestore();
});

describe('Popup', () => {
  it('should render popup with children and header when has "isOpen=true" props', () => {
    render(<Popup onToggle={onToggle} isOpen header={HEADER}>{CHILDREN}</Popup>, {
      container: document.body.appendChild(portalRootElement),
    });
    expect(screen.getByText('CHILDREN')).toBeInTheDocument();
    expect(screen.getByText('HEADER')).toBeInTheDocument();
  });

  it('should not render popup with children and header when has "isOpen=false" props', () => {
    render(<Popup onToggle={onToggle} header={HEADER} isOpen={false}>{CHILDREN}</Popup>, {
      container: document.body.appendChild(portalRootElement),
    });
    expect(screen.queryByText('CHILDREN')).toBe(null);
    expect(screen.queryByText('HEADER')).toBe(null);
  });

  it('should call "onToggle" function after the close button is clicked with false value as first argument', () => {
    const { container } = render(<Popup header={HEADER} onToggle={onToggle} isOpen>{CHILDREN}</Popup>, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent.click(getByDataTest(container, 'popup:close-button'));
    expect(onToggle).toBeCalledTimes(1);
    expect(onToggle.mock.calls[0][0]).toBe(false);
  });

  it('should call "onToggle" function with false value as first argument and after the fade block is clicked ' +
      'if "closeOnFadeClick" is equal true', () => {
    const { container } = render(<Popup header={HEADER} onToggle={onToggle} isOpen closeOnFadeClick>{CHILDREN}</Popup>, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent.click(getByDataTest(container, 'popup:fade'));
    expect(onToggle).toBeCalledTimes(1);
    expect(onToggle.mock.calls[0][0]).toBe(false);
  });

  it('should not call "onToggle" function after the fade block is clicked and if "closeOnFadeClick" is equal false', () => {
    const { container } = render(<Popup header={HEADER} onToggle={onToggle} isOpen closeOnFadeClick={false}>{CHILDREN}</Popup>, {
      container: document.body.appendChild(portalRootElement),
    });
    fireEvent.click(getByDataTest(container, 'popup:fade'));
    expect(onToggle).toBeCalledTimes(0);
  });
});
