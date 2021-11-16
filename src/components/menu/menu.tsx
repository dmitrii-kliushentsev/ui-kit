import tw, { styled, css } from 'twin.macro';

import { spacesToDashes } from '../../utils';
import { Icons } from '../icon';
import { useIntersectionSide } from '../../hooks';
import { Popover } from '../popover';

export interface MenuItemType {
  label: string;
  icon: keyof typeof Icons;
  onClick: () => void;
  Content?: (props: { children: JSX.Element}) => JSX.Element;
}

interface Props {
  items: MenuItemType[];
  bordered?: boolean;
  testContext?: string;
}

export const Menu = ({
  items,
  bordered,
  testContext = '',
}: Props) => (
  <Popover tw="text-monochrome-black">
    {({ isOpen, setIsOpen }) => {
      const { ref, intersectionSide } = useIntersectionSide({ dependency: [isOpen] });
      const position = intersectionSide === 'bottom' ? 'top' : 'bottom';

      return (
        <MenuIcon
          onClick={() => setIsOpen(!isOpen)}
          data-test={`menu:icon:${testContext}`}
        >
          {bordered ? <Icons.MoreOptionsWithBorder /> : <Icons.MoreOptions />}
          {isOpen && (
            <div
              ref={ref}
              style={{
                position: 'absolute',
                zIndex: 50,
                top: position === 'bottom' ? 'calc(100% + 12px)' : undefined,
                bottom: position === 'top' ? 'calc(100% + 12px)' : undefined,
                right: 'calc(50% - 22px)',
              }}
            >
              <ItemsList position={intersectionSide === 'bottom' ? 'top' : 'bottom'} data-test={`menu:list:${testContext}`}>
                {items.map(({
                  icon,
                  label,
                  onClick,
                  Content = ({ children }) => children,
                }) => {
                  const ItemIcon = Icons[icon];
                  return (
                    <Content key={`menu:item:${spacesToDashes(label)}`}>
                      <Item
                        onClick={onClick}
                        data-test={`menu:item:${spacesToDashes(label)}`}
                      >
                        <ItemIcon width={16} height={16} />
                        <ItemLabel>{label}</ItemLabel>
                      </Item>
                    </Content>
                  );
                })}
              </ItemsList>
            </div>
          )}
        </MenuIcon>
      );
    }}
  </Popover>
);
const MenuIcon = styled.div`
  max-height: 32px;
  max-width: 32px;
  ${tw`relative flex items-center text-blue-default cursor-pointer
    hover:text-blue-medium-tint
    active:text-blue-shade
  `}
`;

const ItemsList = styled.div<{ position: 'bottom' | 'top' }>`
  filter: drop-shadow(0 0 24px rgba(0, 0, 0, 0.15));
  ${tw`flex flex-col py-2 px-0 rounded-lg z-50 bg-monochrome-white text-monochrome-black`}

  &::before {
    content: '';
    position: absolute;
    background-color: #ffffff;
    left: calc(100% - 30px);
    height: 15px;
    width: 15px;
    transform: rotate(45deg);
  }

  ${({ position }) => position === 'bottom' && css`
    &::before {
      top: -7px;
    }
  `}

  ${({ position }) => position === 'top' && css`
    &::before {
      bottom: -7px;
    }
  `}
  ${({ position }) => css`
    &::before {
      ${position === 'top' ? 'bottom: -7px;' : 'top: -7px;'}
    }
  `}
`;

const Item = styled.div`
  ${tw`flex flex-row items-center py-0 px-4 cursor-pointer
    hover:bg-monochrome-light-tint
  `};
`;

const ItemLabel = styled.span`
  ${tw`text-14 leading-32 ml-2 whitespace-nowrap`};
`;
