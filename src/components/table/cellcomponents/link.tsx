import React, { FC } from 'react';

export const Link: FC = ({ children }) => (
  <div tw="invisible h-4 text-monochrome-dark-tint cursor-pointer hover:text-blue-medium-tint group-hover:visible">
    {children}
  </div>
);
