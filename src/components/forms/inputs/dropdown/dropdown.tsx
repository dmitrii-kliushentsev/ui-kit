import { useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';

import { Icons } from '../../../icon/index';
import { Popover } from '../../../popover';

type Position = 'top' | 'bottom';
type Value = string | number;

interface Item {
  value: Value;
  label: React.ReactNode;
}

interface Props {
  items: Item[];
  onChange: (value: Value) => void;
  value: Value;
}

export const Dropdown = ({
  items, onChange, value,
}: Props) => {
  const [position, setPosition] = useState<Position>('bottom');
  const node = useRef<HTMLDivElement>(null);
  const labelNode = useRef<HTMLDivElement>(null);
  const itemHeight = 32;
  const dropdownHeight = itemHeight * items.length;
  const { top: menuTopPosition = 0 } = node?.current?.getBoundingClientRect() || {};
  const { height: dropdownLabelHeight = 0 } = labelNode?.current?.getBoundingClientRect() || {};
  const listMargin = 4;

  const selectedValue = items.find((item) => value === item.value);
  return (
    <Popover
      intersectionObserverObjectConfiguration={{
        dependency: [],
        callback: ([entry]) => {
          console.log(entry);
          !entry.isIntersecting && setPosition('top');
        },
      }}
      content={({ isOpen }) => ( // TODO label
        <div ref={node} tw="flex items-center gap-x-1 cursor-pointer">
          <span ref={labelNode} data-test="dropdown:selected-value">
            {selectedValue && selectedValue.label}
          </span>
          <Icons.Expander width={8} height={8} rotate={isOpen ? -90 : 90} />
        </div>
      )}
    >
      {({ ref: dropdownRef }) => {
        const error = 10;
        menuTopPosition && menuTopPosition + dropdownLabelHeight + dropdownHeight + error < document.documentElement.clientHeight
          ? setPosition('bottom') : setPosition('top');

        return (
          <ScrollContainer
            ref={dropdownRef}
            style={{
              top: position === 'bottom' ? `${dropdownLabelHeight + listMargin}px` : `-${dropdownHeight + listMargin}px`,
            }}
          >
            {items.map(({ label, value: itemValue }) => (
              <div
                tw="flex items-center pl-2 pr-8 text-monochrome-black text-14 leading-32 hover:bg-monochrome-light-tint"
                data-test="dropdown:item"
                onClick={(() => onChange(itemValue))}
                key={value}
              >
                {itemValue === value && <Icons.Check width={14} height={10} viewBox="0 0 14 10" tw="absolute text-blue-default" />}
                <span tw="ml-6 whitespace-nowrap font-regular">{label}</span>
              </div>
            ))}
          </ScrollContainer>
        );
      }}
    </Popover>
  );
};

const ScrollContainer = styled.div`
  ${tw`overflow-auto absolute shadow bg-monochrome-white max-h-56 z-50`};
    &::-webkit-scrollbar {
      ${tw`w-1 rounded bg-monochrome-light-tint`}
    };

    &::-webkit-scrollbar-thumb {
      ${tw`w-1 rounded bg-monochrome-medium-tint`}
    };
`;
