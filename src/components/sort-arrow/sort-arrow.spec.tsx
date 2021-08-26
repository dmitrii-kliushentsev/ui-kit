import React from 'react';
import { render, screen } from '@testing-library/react';
import { SortArrow } from './sort-arrow';

describe('SortArrow', () => {
  it('should rotate when order will change', () => {
    const { rerender } = render(<SortArrow order="ASC" />);
    expect(screen.getByTestId('sort-arrow:icon').getAttribute('transform')).toBe('rotate(180)');
    rerender(<SortArrow order="DESC" />);
    expect(screen.getByTestId('sort-arrow:icon').getAttribute('transform')).toBe('rotate(0)');
  });

  it('should not rotate when order has incorrect value', () => {
    // @ts-ignore
    render(<SortArrow order="invalid" />);
    expect(screen.getByTestId('sort-arrow:icon').getAttribute('transform')).toBe('rotate(180)');
  });
});
