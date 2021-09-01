import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tab } from './tab';
import 'jest-styled-components';

describe('Stub', () => {
  it('should render blue border when tab is active', () => {
    render(<Tab active>Tab</Tab>);
    expect(screen.getByText('Tab')).toHaveStyleRule('background-color', 'rgba(0,127,255,var(--tw-bg-opacity))', {
      modifier: ':after',
    });
  });

  it('should not render blue border when tab is inactive', () => {
    render(<Tab>Tab</Tab>);
    expect(screen.getByText('Tab')).not.toHaveStyleRule('background-color', 'rgba(0,127,255,var(--tw-bg-opacity))', {
      modifier: ':after',
    });
  });
});
