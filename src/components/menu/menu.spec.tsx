import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Menu, MenuItemType } from './menu';
import { getByDataTest, queryByDataTest } from '../../../test-utils';

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

const menuItems: MenuItemType[] = [
  {
    label: 'Rename',
    icon: 'Edit',
    onClick: jest.fn(),
  },
  {
    label: 'Settings',
    icon: 'Settings',
    onClick: jest.fn(),
  },
  {
    label: 'Agents list',
    icon: 'Agents',
    onClick: jest.fn(),
  },
  {
    label: 'Logs',
    icon: 'Logs',
    onClick: jest.fn(),
  },
];

describe('Menu', () => {
  it('should open/close menu after click to icon', () => {
    const { container } = render(<Menu items={menuItems} testContext="jest" />);

    fireEvent.click(getByDataTest(container, 'menu:icon:jest'));
    expect(getByDataTest(container, 'menu:list:jest')).toBeInTheDocument();

    fireEvent.click(getByDataTest(container, 'menu:icon:jest'));
    expect(queryByDataTest(container, 'menu:list:jest')).toBeNull();
  });

  it('should close menu after click to item', () => {
    const { container } = render(<Menu items={menuItems} testContext="jest" />);
    fireEvent.click(getByDataTest(container, 'menu:icon:jest'));
    fireEvent.click(getByDataTest(container, 'menu:item:rename'));
    expect(queryByDataTest(container, 'menu:list:jest')).toBeNull();
    expect(menuItems[0].onClick).toBeCalledTimes(1);
  });
});
