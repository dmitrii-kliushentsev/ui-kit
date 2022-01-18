import React, { FC } from 'react';
import tw, { styled } from 'twin.macro';
import { AlertType } from '../../../types/alert';
import { getIcon } from '../getIcon';

interface ContentAlertProps {
  message: string;
  type: AlertType;
}

export const ContentAlert: FC<ContentAlertProps> = ({ message, type }) => (
  <Body type={type} tw="flex gap-x-3 px-4 py-2">
    <div tw="mt-1">
      <ColorWrapper type={type}>
        {getIcon(type)}
      </ColorWrapper>
    </div>
    <Message>
      {message}
    </Message>
  </Body>
);

const Body = styled.div<{type: AlertType}>`
  ${tw`rounded-lg overflow-hidden border`};

  ${({ type }) => [
<<<<<<< HEAD
    type === 'INFO' && tw`border-blue-primary`,
    type === 'SUCCESS' && tw`border-green-success`,
    type === 'WARNING' && tw`border-orange-warning`,
    type === 'ERROR' && tw`border-red-medium-tint`,
=======
    type === 'info' && tw`border-blue-primary`,
    type === 'success' && tw`border-green-success`,
    type === 'warning' && tw`border-orange-warning`,
    type === 'error' && tw`border-red-medium-tint`,
>>>>>>> 04ff84b (refactor: content and system alerts)
  ]}
`;

const Message = styled.div`
  ${tw`text-14 leading-24`}
`;

const ColorWrapper = styled.div<{type: AlertType}>`
  ${({ type }) => [
<<<<<<< HEAD
    type === 'INFO' && tw`text-blue-primary`,
    type === 'SUCCESS' && tw`text-green-success`,
    type === 'WARNING' && tw`text-orange-warning`,
    type === 'ERROR' && tw`text-red-medium-tint`,
=======
    type === 'info' && tw`text-blue-primary`,
    type === 'success' && tw`text-green-success`,
    type === 'warning' && tw`text-orange-warning`,
    type === 'error' && tw`text-red-medium-tint`,
>>>>>>> 04ff84b (refactor: content and system alerts)
  ]}
`;
