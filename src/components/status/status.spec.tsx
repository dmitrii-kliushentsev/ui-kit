import React from 'react';
import renderer from 'react-test-renderer';
import { Status } from './status';

describe('Status', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Status />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
