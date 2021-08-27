import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MessagePanel } from './message-panel';
import { getByDataTest } from '../../../test-utils';

const fn = jest.fn();

describe('MessagePanel', () => {
  it('should call onClose function after click to close icon', () => {
    const { container } = render(<MessagePanel message={{ type: 'ERROR', text: 'TEXT' }} onClose={fn} />);
    fireEvent.click(getByDataTest(container, 'message-panel:close-icon'));
    expect(fn).toBeCalledTimes(1);
  });

  it('should match snapshot with type is ERROR', () => {
    const tree = renderer.create(
      <MessagePanel message={{ type: 'ERROR', text: 'TEXT' }} onClose={fn} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with type is SUCCESS', () => {
    const tree = renderer.create(
      <MessagePanel message={{ type: 'SUCCESS', text: 'TEXT' }} onClose={fn} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with type is WARNING', () => {
    const tree = renderer.create(
      <MessagePanel message={{ type: 'WARNING', text: 'TEXT' }} onClose={fn} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with type is INFO', () => {
    const tree = renderer.create(
      <MessagePanel message={{ type: 'INFO', text: 'TEXT' }} onClose={fn} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
