import React, { Dispatch, useState } from 'react';
import { useClickOutside } from '../../hooks';
import 'twin.macro';

export interface ChildrenProps {
  setIsOpen: Dispatch<boolean>;
  isOpen: boolean;
}

export interface Props {
  children: React.FC<ChildrenProps>;
  className?: string;
}

export const Popover = ({
  children, className,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div tw="relative" ref={ref} className={className}>
      {children({ setIsOpen, isOpen })}
    </div>
  );
};

type Sides = 'right' |'left' | 'top' | 'bottom'

function intersectionSide(react?: DOMRect): Sides | null {
  const {
    left = 0, top = 0, width = 0, height = 0,
  } = react || {};
  console.log(left, top, width, height);
  if (left + width > document.documentElement.clientWidth) {
    return 'right';
  }

  if (left < 0) {
    return 'left';
  }

  if (top + height > document.documentElement.clientHeight) {
    return 'right';
  }

  if (top < 0) {
    return 'bottom';
  }
  return null;
}
