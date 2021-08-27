import React from 'react';
import { render } from '@testing-library/react';
import { SessionIndicator } from './session-indicator';
import { getByDataTest } from '../../../test-utils';

describe('SessionIndicator', () => {
  it('should render inactive session indicator', () => {
    const { container } = render(<SessionIndicator />);
    expect(getByDataTest(container, 'session-indicator:inactive')).toBeInTheDocument();
  });
  it('should render active session indicator', () => {
    const { container } = render(<SessionIndicator active />);
    expect(getByDataTest(container, 'session-indicator:active')).toBeInTheDocument();
  });
});
