import React from 'react';
import renderer from 'react-test-renderer';
import { Badge } from './badge';

describe('Badge', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Badge />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
