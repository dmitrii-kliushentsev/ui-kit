import {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { BEM, div } from '@redneckz/react-bem-helper';
import { nanoid } from 'nanoid';

import { Icons } from '../icon';
import { useClickOutside } from '../../hooks';
import { spacesToDashes } from './spaces-to-dashes';

import styles from './menu.module.scss';
import { Portal } from '../portal';
import { getMenuPosition } from './get-menu-position';

interface MenuItemType {
  label: string;
  icon: keyof typeof Icons;
  onClick: () => void;
  node?: React.ReactNode;
}

interface Props {
  className?: string;
  items: MenuItemType[];
  bordered?: boolean;
  testContext?: string;
}

const menu = BEM(styles);

export const Menu = menu(({
  className, items, bordered, testContext = '',
}: Props) => {
  const [isListOpened, setIsListOpened] = useState(false);
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useClickOutside(() => setIsListOpened(false));

  const [{ height: menuHeight, width: menuWidth }, setMenuCoords] = useState({
    height: 0,
    width: 0,
  } as DOMRect);

  useEffect(() => {
    const hideMenu = () => setIsListOpened(false);
    document.addEventListener('scroll', hideMenu);

    return () => {
      document.removeEventListener('scroll', hideMenu);
    };
  }, []);

  useLayoutEffect(() => {
    // 32 it`s height of item and 16 it`s paddings
    if (iconTopPosition && items.length * 32 + 16 + iconTopPosition < document.documentElement.clientHeight) {
      setPosition('bottom');
    } else {
      setPosition('top');
    }

    const menuCoords = menuRef?.current?.getBoundingClientRect();
    isListOpened && menuCoords && setMenuCoords(menuCoords);

    const observer = new IntersectionObserver(
      ([entry]) => {
        !entry.isIntersecting && setPosition('top');
      },
      {
        root: null,
        threshold: 1.0,
      },
    );
    menuRef.current && observer.observe(menuRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isListOpened]);

  const {
    top: iconTopPosition = 0,
    left: iconLeftPosition = 0,
    width: iconWidth = 0,
    height: iconHeight = 0,
  } = iconRef?.current?.getBoundingClientRect() || {};

  const anchors = {
    iconTopPosition,
    iconLeftPosition,
    iconWidth,
    iconHeight,
    menuHeight,
    menuWidth,
    offset: bordered ? 10 : 12,
  };

  return (
    <div className={className}>
      <MenuIcon
        onClick={() => setIsListOpened(!isListOpened)}
        data-test={`menu:icon:${testContext}`}
      >
        <span ref={iconRef}>
          {bordered ? <Icons.MoreOptionsWithBorder /> : <Icons.MoreOptions />}
        </span>
        {isListOpened && (
          <Portal rootElementId="menu">
            <div ref={menuRef} style={{ position: 'absolute', ...getMenuPosition(position, anchors) }}>
              <ItemsList position={position}>
                {items.map(({
                  icon, label, onClick, node,
                }) => {
                  const ItemIcon = Icons[icon];
                  return (
                    <Item
                      onClick={onClick}
                      key={nanoid()}
                      data-test={`menu:item:${spacesToDashes(label)}`}
                    >
                      <ItemIcon width={16} height={16} />
                      <ItemLabel>{node || label}</ItemLabel>
                    </Item>
                  );
                })}
              </ItemsList>
            </div>
          </Portal>
        )}
      </MenuIcon>
    </div>
  );
});

const MenuIcon = menu.menuIcon(
  div({ onClick: () => {}, 'data-test': '' } as { onClick?: () => void; 'data-test'?: string }),
);
const ItemsList = menu.itemsList(div({} as { position?: 'bottom' | 'top' }));
const Item = menu.item('div');
const ItemLabel = menu.itemLabel('span');
