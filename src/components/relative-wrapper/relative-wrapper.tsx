import React from 'react';
import 'twin.macro';

interface Props {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  [key: string]: unknown;
}

export const RelativeWrapper = ({ children, childrenClassName, ...rest }: Props) => (
  <div tw="relative" {...rest}><div tw="absolute" className={childrenClassName}>{children}</div></div>
);
