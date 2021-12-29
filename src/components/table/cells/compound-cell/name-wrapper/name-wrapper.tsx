import React from 'react';
import tw, { styled } from 'twin.macro';

export const NameWrapper = styled.div`
  ${tw`text-ellipsis h-5 leading-20`}
  ${({ bold }: { bold: boolean }) => bold && tw`font-bold`}
`;
