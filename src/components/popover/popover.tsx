import React, { Dispatch, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { useClickOutside, useIntersectionCallback } from '../../hooks';
import { Props as IntersectionObserverObjectConfiguration } from '../../hooks/use-intersection-callback';

export interface ChildrenProps {
  setIsOpen: Dispatch<boolean>;
  ref: React.RefObject<HTMLDivElement>;
}

interface ContentProps {
  isOpen: boolean;
}

export interface Props {
  children: React.FC<ChildrenProps>;
  content: React.FC<ContentProps> | React.ReactNode;
  className?: string;
  intersectionObserverObjectConfiguration: IntersectionObserverObjectConfiguration;
}

export const Popover = ({
  children, className, content, intersectionObserverObjectConfiguration: { callback, dependency = [] },
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  const childrenRef = useIntersectionCallback({
    callback, dependency: [...dependency, isOpen],
  });
  // const side = intersectionSide(childrenRef?.current?.getBoundingClientRect());

  return (
    <Wrapper ref={ref} className={className}>
      {typeof content === 'function' ? content({ isOpen }) : content}
      {isOpen && children({ setIsOpen, ref: childrenRef })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`relative`}
`;

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
