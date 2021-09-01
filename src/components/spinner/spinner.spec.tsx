import React from 'react';
import renderer from 'react-test-renderer';
import { Spinner } from './spinner';

describe('Badge', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Spinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
