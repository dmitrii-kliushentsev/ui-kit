import React from 'react';
import renderer from 'react-test-renderer';
import { Stub } from './stub';
import { Icons } from '../icon';

describe('Stub', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Stub title="Title" icon={<Icons.Plugins />} message="Message" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
