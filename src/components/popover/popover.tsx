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

  return (
    <Wrapper ref={ref} className={className} onClick={() => setIsOpen(!isOpen)}>
      {typeof content === 'function' ? content({ isOpen }) : content}
      {isOpen && children({ setIsOpen, ref: childrenRef })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`relative`}
`;
