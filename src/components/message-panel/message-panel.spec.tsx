import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MessagePanel } from './message-panel';
import { getByDataTest } from '../../../test-utils';

const fn = jest.fn();

describe('MessagePanel', () => {
  it('should call onClose function after click to close icon', () => {
    const { container } = render(<MessagePanel message={{ type: 'ERROR', text: 'TEXT' }} onClose={fn} />);
    fireEvent.click(getByDataTest(container, 'message-panel:close-icon'));
    expect(fn).toBeCalledTimes(1);
  });
});
