import React from 'react';
import renderer from 'react-test-renderer';
import { MainProgressBar } from './main-progress-bar';

describe('AdditionalProgressBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<MainProgressBar value="50%" type="primary" testContext="snapshot" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
