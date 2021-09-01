import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressBarLegends } from './progress-bar-legends';

describe('ProgressBarLegends', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<ProgressBarLegends />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
