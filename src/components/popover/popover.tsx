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
