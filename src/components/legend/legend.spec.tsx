import React from 'react';
import { render } from '@testing-library/react';
import { Legend, LegendItem } from './legend';
import 'jest-styled-components';
import { getByDataTest } from '../../../test-utils';

const LEGEND_ITEMS:LegendItem[] = [
  { label: 'label1', color: 'red', borderColor: 'red' },
  { label: 'label2', color: 'blue', borderColor: 'blue' },
];

describe('Legend', () => {
  it('should render circle with passed color', () => {
    const firstItem = LEGEND_ITEMS[0];
    const { container } = render(<Legend legendItems={LEGEND_ITEMS} />);
    const circle = getByDataTest(container, `legend:circle:${firstItem.label}`);
    expect(circle.getAttribute('fill')).toBe(firstItem.color);
    expect(circle.getAttribute('stroke')).toBe(firstItem.borderColor);
  });
});
