import React, { Dispatch, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { Props as IntersectionObserverObjectConfiguration, useIntersectionCallback } from '../../hooks/use-intersection-callback';
import { useClickOutside } from '../../hooks';

export interface PopoverChildrenProps {
  setIsOpen: Dispatch<boolean>;
}

export interface PopoverProps {
  children: React.FC<ChildrenProps>;
  content: React.ReactNode;
  className?: string;
}

export const Popover = ({
  children, className, content,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <Wrapper ref={ref} className={className} onClick={() => setIsOpen(!isOpen)}>
      {content}
      {isOpen && children({ setIsOpen })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`relative`}
`;

interface ChildrenProps extends PopoverChildrenProps {
  ref: React.RefObject<HTMLDivElement>;
}

interface Props extends PopoverProps {
  children: React.FC<ChildrenProps>;
  intersectionObserverObjectConfiguration: IntersectionObserverObjectConfiguration;
}

export const PopoverWithIntersectionObserver = ({ intersectionObserverObjectConfiguration, children, ...rest }: Props) => {
  const ref = useIntersectionCallback(intersectionObserverObjectConfiguration);

  return (
    <Popover {...rest}>
      {(props) => children({ ref, ...props })}
    </Popover>
  );
};
