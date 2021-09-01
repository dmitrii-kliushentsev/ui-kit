import React from 'react';
import renderer from 'react-test-renderer';
import { AdditionalProgressBar } from './additional-progress-bar';

describe('AdditionalProgressBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<AdditionalProgressBar value="50%" type="primary" testContext="snapshot" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
