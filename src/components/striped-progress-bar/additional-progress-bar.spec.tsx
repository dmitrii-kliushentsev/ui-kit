import React from 'react';
import renderer from 'react-test-renderer';
import { StripedProgressBar } from './striped-progress-bar';

describe('StripedProgressBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<StripedProgressBar value="50%" type="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
