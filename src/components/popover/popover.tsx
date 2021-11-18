import React, { Dispatch, useEffect, useState } from 'react';
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
  children, className, ...rest
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === '27') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div tw="relative" ref={ref} className={className} {...rest}>
      {children({ setIsOpen, isOpen })}
    </div>
  );
};
