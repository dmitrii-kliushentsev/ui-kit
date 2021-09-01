import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorFallback } from './error-fallback';

describe('ErrorFallback', () => {
  it('should call resetErrorBoundary after click to "Go to agents a page" link', () => {
    const fn = jest.fn();
    render(<ErrorFallback error={new Error('Error')} resetErrorBoundary={fn} />);
    fireEvent.click(screen.getByRole('button'));
    expect(fn).toBeCalledTimes(1);
  });
});
